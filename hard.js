module.exports = {
  findMedianSortedArrays: function(nums1, nums2) {
    // Merge the array and sort
    const mergedArray = nums1.concat(nums2);
    mergedArray.sort(function(a, b) {
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
}