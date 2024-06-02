import { winner_combinations } from "../js/constants.js"

export const checkWinner = (board) => {
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

export const checkEndGame = (board) => {
  return board.every((square) => square !== null)
}