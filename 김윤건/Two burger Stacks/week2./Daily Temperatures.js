var dailyTemperatures = function(temperatures) {
  const answer = [];
  let left = 0;
  let right = left + 1;

  while (left < temperatures.length) {
      const curTemp = temperatures[left];
      const nextTemp = temperatures[right];
      
      if (curTemp < nextTemp) {
          answer.push(right - left);
          right = left;
      }

      right++;

      if (right === temperatures.length) {
          answer.push(0);
          left++;
          right = left + 1;
      }
  }
  
  return answer;
};
