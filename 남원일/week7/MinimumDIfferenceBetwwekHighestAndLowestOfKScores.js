/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let result = Infinity;
  const sortedNums = nums.sort((a, b) => a - b);
  let currentIndex = 0;
  const diff = k - 1;

  if (nums.length === k)
    return sortedNums[sortedNums.length - 1] - sortedNums[0];

  while (currentIndex + diff < nums.length) {
    result = Math.min(
      result,
      sortedNums[currentIndex + diff] - sortedNums[currentIndex]
    );
    currentIndex++;
  }

  return result;
};
