const maxSlidingWindow = (nums, k) => {
  const result = [];

  for (let i = 0; i + k <= nums.length; i++) {
    const slidingWindows = [...nums].slice(i, i + k);

    result.push(Math.max(...slidingWindows));
  }

  return result;
};
