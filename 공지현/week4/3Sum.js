/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ascendingNums = nums.slice().sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < ascendingNums.length - 1; i++) {
    for (let j = i + 1; j < ascendingNums.length; j++) {
      const complement = 0 - (ascendingNums[i] + ascendingNums[j]);

      if (ascendingNums.includes(complement, j + 1)) {
        result.push([ascendingNums[i], ascendingNums[j], complement]);
      }
    }
  }

  return result.length
    ? [...new Set(result.join("|").split("|"))]
        .map((v) => v.split(","))
        .map((v) => v.map((a) => +a))
    : [];
};
