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

// 좋은 풀이 , 모범 답안

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
