/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const descendingNums = nums.slice().sort((a, b) => b - a);

  return (descendingNums[0] - 1) * (descendingNums[1] - 1);
};
