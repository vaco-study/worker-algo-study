var findMaxAverage = function (nums, k) {
  let index = 0;
  let sum = 0;

  while (index < k) {
    sum += nums[index];
    index++;
  }

  let maxAvg = sum / k;

  while (index < nums.length) {
    sum = sum + nums[index] - nums[index - k];
    maxAvg = Math.max(maxAvg, sum / k);
    index++;
  }

  return maxAvg;
};
