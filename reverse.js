
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

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
};

const answer = reverse(x=1534236469)
console.log(answer)