/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = {
  twoSum: function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  },

  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix: function(strs) {
      if (strs.length == 0) return ""

      let prefix = strs[0]

      for (let i = 1; i < strs.length; i++) {
          while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") return ""
          }
      }
      return prefix
  }
}