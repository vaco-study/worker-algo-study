var dailyTemperatures = function (temperatures) {
  const queue = [{
		index: 0,
		temperature: temperatures[0]
	}];
  const answer = [];

  for (let i = 1; i < temperatures.length; i++) {
    while (queue[queue.length - 1]?.temperature < temperatures[i]) {
      const lowTemperature = queue.pop();
      answer[lowTemperature.index] = i - lowTemperature.index;
    }

    queue.push({
      index: i,
      temperature: temperatures[i],
    });
  }

	queue.forEach((value) => {
		answer[value.index] = 0
	})

  return answer;
};