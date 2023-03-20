/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let result;
  let currentIndex = 0;

  while (currentIndex + k - 1 < nums.length) {
    const differenceBetweenMaxAndMin =
      sortedNums[currentIndex + k - 1] - sortedNums[currentIndex];

    result = result
      ? Math.min(result, differenceBetweenMaxAndMin)
      : differenceBetweenMaxAndMin;

    currentIndex++;
  }

  return result;
};
