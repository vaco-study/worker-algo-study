var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxContainerArea = 0;

  while (left < right) {
    const leftValue = height[left];
    const rightValue = height[right];
    const currentMinValue = Math.min(height[left], height[right]);
    const currentGraphLength = Math.abs(left - right);
    const currentContainerArea = currentMinValue * currentGraphLength;

    maxContainerArea = Math.max(maxContainerArea, currentContainerArea);

    if (leftValue < rightValue) {
      left++;
    } else {
      right--;
    }
  }

  return maxContainerArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
