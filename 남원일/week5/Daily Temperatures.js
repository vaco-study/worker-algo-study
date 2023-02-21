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
