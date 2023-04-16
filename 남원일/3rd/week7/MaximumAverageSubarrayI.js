var findMaxAverage = function (nums, k) {
  let currentWindowSum = 0;
  for (let i = 0; i < k; i++) {
    currentWindowSum += nums[i];
  }

  let maxSum = currentWindowSum;

  for (i = 1; i <= nums.length - k; i++) {
    currentWindowSum = currentWindowSum - nums[i - 1] + nums[i + k - 1];
    maxSum = Math.max(maxSum, currentWindowSum);
  }

  return maxSum / k;
};

a ? 3 : 1;
