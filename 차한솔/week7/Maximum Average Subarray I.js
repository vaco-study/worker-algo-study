var findMaxAverage = function (nums, k) {
  const subarray = [];
  let sum = 0;
  let i = 0;
  let max = Number.MIN_SAFE_INTEGER;

  while (i <= nums.length) {
    if (subarray.length === k) {
      const average = sum / k;

      max = Math.max(max, average);
      sum -= subarray[0];
      subarray.shift();
    }

    subarray.push(nums[i]);
    sum += nums[i];
    i++;
  }

  return max;
};
