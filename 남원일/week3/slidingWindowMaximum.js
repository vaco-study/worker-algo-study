/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k > nums.length) return [];
  const result = [];
  const tempArr = [];
  let currentMaxValue = -Infinity;

  for (let i = 0; i < k; i++) {
    tempArr.push(nums[i]);
  }

  currentMaxValue = Math.max(...tempArr);
  result.push(currentMaxValue);

  for (let i = k; i < nums.length; i++) {
    tempArr.shift();
    tempArr.push(nums[i]);
    currentMaxValue = Math.max(...tempArr);
    result.push(currentMaxValue);
  }

  return result;
};

// 시간복잡도가 O(n^2)을 초과 함

// 베스트 풀이

const maxSlidingWindow = (nums, k) => {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);

    // When i + 1 - k >= 0, the window is fully overlapping nums
    const j = i + 1 - k;
    if (j >= 0) {
      res.push(q[0]);
      if (nums[j] === q[0]) q.shift(); // If the biggest element in q is about to exit window, remove it from q
    }
  }
  return res;
};
