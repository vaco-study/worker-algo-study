/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    )
      stack.pop();

    result[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return result;
};
