var easy = require("./easy");
var medium = require("./medium");
var hard = require("./hard");

const a = medium.isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

// [
//   [".", ".", "9", "7", "4", "8", ".", ".", "."],
//   ["7", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", "2", ".", "1", ".", "9", ".", ".", "."],
//   [".", ".", "7", ".", ".", ".", "2", "4", "."],
//   [".", "6", "4", ".", "1", ".", "5", "9", "."],
//   [".", "9", "8", ".", ".", ".", "3", ".", "."],
//   [".", ".", ".", "8", ".", "3", ".", "2", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "6"],
//   [".", ".", ".", "2", "7", "5", "9", ".", "."],
// ];

// ["2", "6", ".", ".", "7", ".", ".", ".", "."],
//   [".", ".", "9", "6", ".", "2", ".", "1", "."],
//   ["4", ".", ".", "3", ".", ".", ".", ".", "."],
//   [".", ".", "3", ".", ".", ".", ".", ".", "8"],
//   ["8", ".", "7", "9", ".", "4", "5", ".", "2"],
//   ["9", ".", ".", ".", ".", ".", "7", ".", "."],
//   [".", ".", ".", ".", ".", "7", ".", ".", "5"],
//   [".", "4", ".", "2", ".", "6", "1", ".", "."],
//   [".", ".", ".", ".", "3", ".", ".", "8", "6"],
console.log(a);
