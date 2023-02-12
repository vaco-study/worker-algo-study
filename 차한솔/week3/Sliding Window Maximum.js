//1차 풀이 - 완전탐색 (시간초과)
var maxSlidingWindow = function (nums, k) {
  const maxNumbers = [];

  debugger;

  if (k === nums.length) {
    return nums;
  }

  for (let i = 0; i <= nums.length - k; i++) {
    const slicedNums = nums.slice(i, i + k);
    const max = Math.max(...slicedNums);

    maxNumbers.push(max);
  }

  return maxNumbers;
};

//Monotonic deque를 이용한 풀이
/*
  - 일정 범위 내의 유효한 값만 저장
  - 맨 앞에 min/max를 저장
  - Sliding window min/max 구하기 및 DP 최적화 등에 사용
*/

var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const maxNums = [];

  for (let i = 1; i < nums.length; i++) {
    while (nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }

    queue.push(nums[i]);

    if (i >= k - 1) {
      maxNums.push(queue[0]);

      if (nums[i - k + 1] === queue[0]) {
        queue.shift();
      }
    }
  }

  return maxNums;
};
