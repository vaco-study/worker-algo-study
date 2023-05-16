/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 1; i <= numRows; i++) {
    const prevNums = result[result.length - 1];
    const currNums = [];

    for (let j = 0; j < i; j++) {
      if (j === 0 || currNums.length + 1 === i) {
        currNums.push(1);

        continue;
      }

      currNums.push(prevNums[j - 1] + prevNums[j]);
    }

    result.push(currNums);
  }

  return result;
};
