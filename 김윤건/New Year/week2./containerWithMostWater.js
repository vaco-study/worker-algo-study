var maxArea = function(height) {
  let max = -Infinity;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const bottom = right - left;
    const curHeight = Math.min(leftHeight ,rightHeight);
    const containerArea = bottom * curHeight;
    
    max = Math.max(max, containerArea);

    if (leftHeight < rightHeight) {
      left++
    } else {
      right--;
    }
  }

  return max;
};
