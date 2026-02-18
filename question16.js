let gameBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];
for (let i = 0; i < gameBoard.length; i++) {      // loop through rows
  for (let j = 0; j < gameBoard[i].length; j++) { // loop through columns in each row
    console.log(`gameBoard[${i}][${j}] = ${gameBoard[i][j]}`);
  }
}
let sum = 0;

for (let i = 0; i < gameBoard.length; i++) {
  for (let j = 0; j < gameBoard[i].length; j++) {
    sum += gameBoard[i][j];  // add each element to sum
  }
}

console.log("Sum of all elements:", sum);

