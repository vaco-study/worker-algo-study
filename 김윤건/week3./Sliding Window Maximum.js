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
