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
        const num = nums[i];

        while (q && nums[q[q.length - 1]] <=  num) { // index를 모아두는 q의 값들이 새로운 num보다 작으면 pop
            q.pop();
        }

        q.push(i);

        if (q[0] === i - k) { // sliding window 앞 부분이 다 찼을때, 앞 부분 빼주기
            q.shift();
        }

        if (i >=  k - 1) { // sliding window가 가득찬 이후부터는 result에 계속 결과값 입력
            result.push(nums[q[0]]);
        }
    }
    return result;
};

// monotonic deque
