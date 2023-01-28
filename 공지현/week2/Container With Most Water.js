const maxArea = (height) => {
  let maxAreaOfWater = 0;

  let i = 0;
  let j = height.length - 1;

  while (j - i > 0) {
    const area = Math.min(height[i], height[j]) * (j - i);

    if (maxAreaOfWater < area) maxAreaOfWater = area;

    height[i] < height[j] ? i++ : j--;
  }

  return maxAreaOfWater;
};
