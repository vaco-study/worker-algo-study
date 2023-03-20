/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let avg = sum / k;

  let maxAvg = avg;

  for (let i = 1; i + k <= nums.length; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    avg = sum / k;

    if (avg > maxAvg) maxAvg = avg;
  }

  return maxAvg;
};
