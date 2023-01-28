module.exports = {
  /**
   * @param {number} x
   * @return {number}
   */
  reverse: function(x) {

    let reversedInput = 0

    let xArray = (""+x).split("")
    
    if (xArray[0] === "-") {
      xArray = xArray.slice(1)
      reveresedArray = xArray.reverse()
      reversedInput = parseInt(reveresedArray.join("")) * -1 < (-1) * 2**31 ? 0 : parseInt(reveresedArray.join("")) * -1
    } else {
      reveresedArray = xArray.reverse()
      reversedInput = parseInt(reveresedArray.join("")) > 2**31 - 1 ? 0 :  parseInt(reveresedArray.join(""))
    }

    return reversedInput
  },

  /**
   * @param {string} s
   * @return {number}
  */
  myAtoi: function(s) {
    // Ignore leading whitespace
    const trimmedS = s.trim();
    let digits = [];
    let multiplier = 1;

    for (let i = 0; i < trimmedS.length; i++) {
      // Check if the next char is +, -
      if (i === 0) {
        if (trimmedS[i] === "+") {
          multiplier = 1
        } else if (/^\d+$/.test(trimmedS[i])) {
          multiplier = 1
          digits.push(trimmedS[i])
        } else if (trimmedS[i] === "-") {
          multiplier = -1
        } else {
          return 0
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
      return 0
    }

    const numericS = parseInt(digits.join("")) * multiplier

    // Clamp the integer result to the 32-bit range
    if (numericS > 2**31 - 1) {
      return 2**31-1
    } else if (numericS < (-1)*2**31) {
      return (-1)*2**31
    }

    return numericS
  }
}