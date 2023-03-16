var search = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  if (nums.length === 1 && nums[0] === target) return 0;
  if (nums[startIndex] === target) {
    return startIndex;
  }
  if (nums[endIndex] === target) {
    return endIndex;
  }

  while (startIndex !== middleIndex && endIndex !== middleIndex) {
    if (nums[middleIndex] === target) {
      return middleIndex;
    }

    if (nums[middleIndex] > target) {
      endIndex = middleIndex;
    } else {
      startIndex = middleIndex;
    }

    middleIndex = Math.floor((startIndex + endIndex) / 2);
  }

  return -1;
};
