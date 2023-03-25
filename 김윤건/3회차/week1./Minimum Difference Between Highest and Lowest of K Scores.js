var minimumDifference = function(nums, k) {
  if (k === 1) return 0;

  let answer = Infinity;

  nums = nums.sort((a, b) => b - a);

  for (let i = 0 ; i < nums.length - k + 1; i++) {
      answer = Math.min(answer, nums[i] - nums[i + k - 1]);
  }

  return answer;
};
