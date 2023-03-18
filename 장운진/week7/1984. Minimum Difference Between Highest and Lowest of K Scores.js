var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let result = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const breakCondition = i + k - 1;

    if (breakCondition >= nums.length) break;

    result = Math.min(result, nums[breakCondition] - nums[i]);
  }

  return result;
};
