/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = [];

  for (let benchMark = 0; benchMark < temperatures.length; benchMark++) {
    let comparison = benchMark + 1;
    let count = 1;
    let isFound = false;

    while (!isFound && comparison < temperatures.length) {
      if (temperatures[comparison] > temperatures[benchMark]) {
        answer[benchMark] = count;
        isFound = true;
        break;
      }

      comparison++;
      count++;
    }

    if (!isFound) {
      answer[benchMark] = 0;
    }
  }

  return answer;
};

// 좋은 풀이

var dailyTemperatures2 = function (temperatures) {
  let n = temperatures.length;
  let stack = new Array();
  let res = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    res[i] = stack[stack.length - 1] ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }
  return res;
};
