// 완전 탐색 Solution
var dailyTemperatures = function (temperatures) {
  const answer = [];

  for (let i = 0; i < temperatures.length; i++) {
    const baseTemperature = temperatures[i];
    let numberOfDays = 0;

    for (let j = i; j < temperatures.length; j++) {
      const comparingTemperature = temperatures[j];

      if (comparingTemperature > baseTemperature) {
        numberOfDays = Math.abs(i - j);

        break;
      }
    }

    answer.push(numberOfDays);
  }

  return answer;
};
