var maxArea = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxContainerArea = 0;

  while (leftIndex < rightIndex) {
    const leftValue = height[leftIndex];
    const rightValue = height[rightIndex];
    const currentMinValue = Math.min(height[leftIndex], height[rightIndex]);
    const currentGraphLength = Math.abs(leftIndex - rightIndex);
    const currentContainerArea = currentMinValue * currentGraphLength;

    maxContainerArea = Math.max(maxContainerArea, currentContainerArea);

    if (leftValue < rightValue) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxContainerArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
