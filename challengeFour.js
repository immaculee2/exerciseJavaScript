let board = [
  ["", "", ""], // row 0
  ["", "", ""], // row 1
  ["", "", ""]  // row 2
];
board[0][0] = "X";
board[1][1] = "O";

console.log(board);
function checkWin(board, player) {
  // 1. Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // 2. Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
      return true;
    }
  }

  // 3. Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  // No win
  return false;
}
console.log("X wins?", checkWin(board, "X")); // false
console.log("O wins?", checkWin(board, "O")); // false

// Add moves to simulate a win for X
board[0][1] = "X";
board[0][2] = "X";

console.log("X wins now?", checkWin(board, "X")); // true
for (let i = 0; i < 3; i++) {
  console.log(board[i].join(" | "));
}
