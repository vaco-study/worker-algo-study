var findMaxAverage = function(nums, k) {
  if (nums.length === 1) return nums[0];

  let answer = -Infinity;
  let idx = 0;

  const sliced = nums.slice(idx, idx + k);
  let sum = sliced.reduce((acc, cur) => acc + cur, 0);

  while(idx + k - 1 !== nums.length) {
      answer = Math.max(answer, sum / k);

      sum -= nums[idx];
      idx++;
      sum += nums[idx + k - 1];
  }

  return answer;
};
