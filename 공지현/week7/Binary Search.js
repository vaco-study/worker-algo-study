/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;

  const midIndex = Math.floor(nums.length / 2);

  if (nums[midIndex] === target) return midIndex;
  else if (nums[midIndex] > target) {
    const result = search(nums.slice(0, midIndex), target);

    return result === -1 ? -1 : result;
  } else {
    const result = search(nums.slice(midIndex + 1), target);

    return result === -1 ? -1 : result + midIndex + 1;
  }
};
