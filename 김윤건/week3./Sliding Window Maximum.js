var maxSlidingWindow = function(nums, k) {
  const answer =[];
  let left = 0;
  let right = left + k;

  while (left <= nums.length - k) {
      const slicedNums = nums.slice(left, right);
      const max = Math.max(...slicedNums);

      answer.push(max);
      left++;
      right++;
  }

  return answer;
};
// time limit

var maxSlidingWindow = function(nums, k) {
  const result = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
      while (q && nums[q[q.length - 1]] <= nums[i]) {
          q.pop();
      }

      q.push(i);

      if (q[0] === i - k) {
          q.shift();
      }

      if (i >= k - 1) {
          result.push(nums[q[0]]);
      }
  }

  return result;
};

// monotonic deque
