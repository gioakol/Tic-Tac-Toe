import { useState } from "react"
import confetti from "canvas-confetti"

const turns = {
  X: 'X',
  O: 'O'
}

export const winner_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(turns.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (board) => {
    for (const combo of winner_combinations) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        //if someone win
        return board[a]
      }
    }
    //if someone has no win
    return null
  }

  const checkEndGame = (board) => {
    return board.every((square) => square !== null)
  }
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
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

    //Check if someone win
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
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
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false ? 'Draw' : 'Won'
                }
              </h2>
              <header>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Start again</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
