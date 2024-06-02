import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { turns } from "./js/constants.js"
import { checkWinner, checkEndGame } from "./validations/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')

    return boardStorage? JSON.parse(boardStorage) : Array(9).fill(null)
  })  
    
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')

    return turnStorage? turnStorage: turns.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //Check if already selected position and do nothing
    if (board[index] || winner)
      return

    //Save selected position
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Set new turn
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    //Save in local storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //Check if someone win
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <button onClick={resetGame}>Restart</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>{square}</Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App