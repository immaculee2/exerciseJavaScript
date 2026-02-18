let gameBoard = [
  [0, 0, 0], // row 0
  [0, 0, 0], // row 1
  [0, 0, 0]  // row 2
];
gameBoard[1][1] = 1;
console.log(gameBoard)
console.log(gameBoard[0][2]);//Access the top-right corner
// console.log(gameBoard)
for (let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i]);
}
