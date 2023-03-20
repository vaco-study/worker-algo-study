/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = -1;

  while (start <= end) {
    const middle = Math.ceil((start + end) / 2);

    if (nums[middle] < target) {
      start = middle + 1;
    }

    if (nums[middle] > target) {
      end = middle - 1;
    }

    if (nums[middle] === target) {
      index = middle;
      break;
    }
  }

  return index;
};
