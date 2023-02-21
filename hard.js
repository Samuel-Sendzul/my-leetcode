module.exports = {
  findMedianSortedArrays: function (nums1, nums2) {
    // Merge the array and sort
    const mergedArray = nums1.concat(nums2);
    mergedArray.sort(function (a, b) {
      return a - b;
    });

    // Determine the median
    const half = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2) {
      return mergedArray[half];
    } else {
      return (mergedArray[half - 1] + mergedArray[half]) / 2;
    }
  },
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solveSudoku: function (board) {
    let solved = false;

    while (!solved) {
      // Iterate through the [1 - 9]
      for (let num = 1; num < 10; num++) {
        // Iterate through each subgrid
        for (i of [0, 3, 6]) {
          for (j of [0, 3, 6]) {
            // Extract subgrid
            let subgrid = [];

            const rows = board.slice(i, i + 3);
            for (row of rows) {
              subgrid.push(row.slice(j, j + 3));
            }

            // Check if subgrid contains num
            let contains = false;
            for (row of subgrid) {
              if (row.includes(num.toString())) {
                contains = true;
              }
            }

            // If number doesn't exist, execute logic to determine candidate squares
            if (!contains) {
              // Rule out options based on if the row or column contains num
              let candidateRows = [...Array(3).keys()].map((x) => x + i);
              let candidateCols = [...Array(3).keys()].map((x) => x + j);

              // Check rows
              for (let k = i; k < i + 3; k++) {
                if (board[k].includes(num.toString())) {
                  candidateRows.splice(candidateRows.indexOf(k), 1);
                }
              }

              // Get all the columns applicable to the subgrid
              let cols = [];
              for (let row of board) {
                cols.push(row.slice(j, j + 3));
              }
              cols = cols[0].map((col, c) => cols.map((row, r) => cols[r][c]));

              // Check columns
              for (let l = j; l < j + 3; l++) {
                if (cols[l % 3].includes(num.toString())) {
                  candidateCols.splice(candidateCols.indexOf(l), 1);
                }
              }

              if (candidateCols.length > 0 && candidateRows.length > 0) {
                // Create a list of coordinate candidates
                let coordinates = [];
                for (let rowIndex of candidateRows) {
                  for (let colIndex of candidateCols) {
                    if (board[rowIndex][colIndex] === ".") {
                      coordinates.push([rowIndex, colIndex]);
                    }
                  }
                }

                // Update the board if a single candidate coordinate remains
                if (coordinates.length === 1) {
                  board[coordinates[0][0]][coordinates[0][1]] = num.toString();
                }
              }
            }
          }
        }

        // Check if rows or columns can be filled
        columns = board[0].map((col, c) => board.map((row, r) => board[r][c]));
        let possibilities = [...Array(9).keys()]
          .map((x) => x + 1)
          .map((el) => el.toString());

        // Check rows for fill opportunities
        for (let k = 0; k < board.length; k++) {
          const row = board[k];

          let options = [];
          for (let l = 0; l < columns.length; l++) {
            let alreadyPresent = columns[l].filter((el) => !["."].includes(el));

            if (row[l] === ".") {
              options.push(
                possibilities
                  .filter(function (x) {
                    return alreadyPresent.indexOf(x) < 0;
                  })
                  .filter(function (x) {
                    return row.indexOf(x) < 0;
                  })
              );
            } else {
              options.push([]);
            }
          }
          // Check how many occurences of each option there are
          optionCounts = {};
          for (let option of options) {
            for (let number of option) {
              optionCounts[number] !== undefined
                ? (optionCounts[number] += 1)
                : (optionCounts[number] = 1);
            }
          }

          const candidateElement = Object.keys(optionCounts).find(
            (key) => optionCounts[key] === 1
          );

          if (candidateElement !== undefined) {
            // Find the index of the option containing the candidate element
            for (let l = 0; l < options.length; l++) {
              if (options[l].includes(candidateElement.toString())) {
                board[k][l] = candidateElement.toString();
                break;
              }
            }
          }
        }

        // Check columns for fill opportunities
        columns = board[0].map((col, c) => board.map((row, r) => board[r][c])); // need to reinstatiate cols incase there were updates in the row operatons
        for (let k = 0; k < columns.length; k++) {
          const col = columns[k];

          let options = [];
          for (let l = 0; l < board.length; l++) {
            let alreadyPresent = board[l].filter((el) => !["."].includes(el));

            if (col[l] === ".") {
              options.push(
                possibilities
                  .filter(function (x) {
                    return alreadyPresent.indexOf(x) < 0;
                  })
                  .filter(function (x) {
                    return col.indexOf(x) < 0;
                  })
              );
            } else {
              options.push([]);
            }
          }
          // Check how many occurences of each option ther3 are
          optionCounts = {};
          for (let option of options) {
            for (let number of option) {
              optionCounts[number] !== undefined
                ? (optionCounts[number] += 1)
                : (optionCounts[number] = 1);
            }
          }

          const candidateElement = Object.keys(optionCounts).find(
            (key) => optionCounts[key] === 1
          );

          if (candidateElement !== undefined) {
            // Find the index of the option containing the candidate element
            for (let l = 0; l < options.length; l++) {
              if (options[l].includes(candidateElement.toString())) {
                board[l][k] = candidateElement.toString();
                break;
              }
            }
          }
        }

        // Check if solved
        solved = board.every((currentValue, index, arr) => {
          return !currentValue.includes(".");
        });
      }
    }
    console.log("Done")
  },

};
