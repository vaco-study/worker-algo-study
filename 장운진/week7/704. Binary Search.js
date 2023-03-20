var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid] == target) return mid;

    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};
