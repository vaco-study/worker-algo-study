/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const result = [];
  let i = 0;
  let j = 1;
  let k = 2;

  while (i < sortedNums.length - 2) {
    if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
      result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
    }

    if (k < sortedNums.length - 1) {
      k++;
      continue;
    }

    if (k === sortedNums.length - 1) {
      if (j === nums.length - 2) {
        if (sortedNums[i] === sortedNums[i + 1]) {
          i = i + 2;
          j = i + 1;
          k = j + 1;
          continue;
        }

        i++;
        j = i + 1;
        k = j + 1;
        continue;
      }

      j++;
      k = j + 1;
      continue;
    }
  }

  return result;
};

// 중복을 해결할 수 있는 방법은 뭘까?
