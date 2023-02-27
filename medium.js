module.exports = {
  /**
   * @param {number} x
   * @return {number}
   */
  reverse: function (x) {
    let reversedInput = 0;

    let xArray = ("" + x).split("");

    if (xArray[0] === "-") {
      xArray = xArray.slice(1);
      reveresedArray = xArray.reverse();
      reversedInput =
        parseInt(reveresedArray.join("")) * -1 < -1 * 2 ** 31
          ? 0
          : parseInt(reveresedArray.join("")) * -1;
    } else {
      reveresedArray = xArray.reverse();
      reversedInput =
        parseInt(reveresedArray.join("")) > 2 ** 31 - 1
          ? 0
          : parseInt(reveresedArray.join(""));
    }

    return reversedInput;
  },

  /**
   * @param {string} s
   * @return {number}
   */
  myAtoi: function (s) {
    // Ignore leading whitespace
    const trimmedS = s.trim();
    let digits = [];
    let multiplier = 1;

    for (let i = 0; i < trimmedS.length; i++) {
      // Check if the next char is +, -
      if (i === 0) {
        if (trimmedS[i] === "+") {
          multiplier = 1;
        } else if (/^\d+$/.test(trimmedS[i])) {
          multiplier = 1;
          digits.push(trimmedS[i]);
        } else if (trimmedS[i] === "-") {
          multiplier = -1;
        } else {
          return 0;
        }
      } else {
        // Read in the next characters until the next non-digit char (or end of the string)
        if (/^\d+$/.test(trimmedS[i])) {
          digits.push(trimmedS[i]);
        } else {
          break;
        }
      }
    }

    if (digits.length === 0) {
      return 0;
    }

    const numericS = parseInt(digits.join("")) * multiplier;

    // Clamp the integer result to the 32-bit range
    if (numericS > 2 ** 31 - 1) {
      return 2 ** 31 - 1;
    } else if (numericS < -1 * 2 ** 31) {
      return -1 * 2 ** 31;
    }

    return numericS;
  },

  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstringNaive: function (s) {
    let substrings = [];
    for (let i = 0; i < s.length - 1; i++) {
      let substring = "";
      for (let j = i; j < s.length; j++) {
        if (!substring.includes(s[j])) {
          substring += s[j];
        } else {
          break;
        }
      }
      substrings.push(substring);
    }

    if (substrings.length === 0) {
      return s.length;
    }

    const longestLength = substrings.sort(function (a, b) {
      return b.length - a.length;
    })[0];

    return longestLength.length;
  },
  lengthOfLongestSubstringHashSet: function (s) {
    let chars = {};

    let left = 0;
    let right = 0;

    let res = 0;

    while (right < s.length) {
      let r = s[right];
      chars[r] ? (chars[r] += 1) : (chars[r] = 1);

      while (chars[r] > 1) {
        let l = s[left];
        chars[l] ? (chars[l] -= 1) : (chars[l] = -1);
        left += 1;
      }

      res = Math.max(res, right - left + 1);

      right += 1;
    }
    return res;
  },
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPowNaive: function (x, n) {
    if (x === 1) {
      return 1;
    }

    if (x === -1) {
      // Determine if n is even
      if (n % 2 === 0) {
        return 1;
      } else {
        return -1;
      }
    }

    if (n > 0) {
      let res = x;
      for (let i = 1; i < n; i++) {
        res *= x;
      }
      return res;
    } else if (n < 0) {
      n = Math.abs(n);
      let res = 1 / x;
      for (let i = 1; i < n; i++) {
        res *= 1 / x;
      }
      return res;
    } else {
      return 1;
    }
  },
  myPowUseLogs: function (x, n) {
    if (x === 1) {
      return 1;
    }

    if (n === 0) {
      return 1;
    }

    if (x < 0) {
      if (n > 0) {
        let res = x;
        for (let i = 1; i < n; i++) {
          res *= x;
        }
        return res;
      } else if (n < 0) {
        n = Math.abs(n);
        let res = 1 / x;
        for (let i = 1; i < n; i++) {
          res *= 1 / x;
        }
        return res;
      } else {
        return 1;
      }
    } else {
      return Math.exp(n * Math.log(x));
    }
  },
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku: function (board) {
    const checkDuplciates = (arr) => {
      let counts = {};
      for (const element of arr) {
        counts[element] = counts[element] ? counts[element] + 1 : 1;
      }
      for (let element in counts) {
        if (element != "." && counts[element] > 1) {
          return false;
        }
      }
      return true;
    };

    // Check constraints
    if (board.length !== 9) {
      return false;
    }
    for (let i = 0; i < board.length; i++) {
      // Check duplicates row
      if (!checkDuplciates(row)) {
        return false;
      }
    
      if (board[i].length !== 9) {
        return false
      }
      for (let j = i; j < board[i].length; j++) {
        if (!/^\d+$/.test(board[i][j]) && board[i][j] !== ".") {
          return false;
        }
      }
    }
 
    

    // Check duplicates columns
    columns = board[0].map((col, c) => board.map((row, r) => board[r][c]));
    for (let col of columns) {
      if (!checkDuplciates(col)) {
        return false;
      }
    }

    // Check if there is a duplicate in the subgrid
    for (i of [0, 3, 6]) {
      for (j of [0, 3, 6]) {
        // Extract subgrid
        let subgrid = [];

        const rows = board.slice(i, i + 3);
        for (row of rows) {
          subgrid.push(...row.slice(j, j + 3));
        }
        if (!checkDuplciates(subgrid)) {
          return false;
        }
      }
    }
    return true;
  },
};
