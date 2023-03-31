/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
 var jobScheduling = function(startTime, endTime, profit) {
  const sumArr = [];

  for (let i = 0; i < profit.length; i++) {
      sumArr.push([startTime[i], endTime[i], profit[i]]);
  }
 
  sumArr.sort((a, b) => b[2] - a[2]);

  const store = [];

  for (let i = 0; i < sumArr.length; i++) {
      let [targetS, targetE, targetP] = sumArr[i];
      let result = targetP;
      
      for (let j = i + 1; j < sumArr.length; j++) {
          const [start, end, profit] = sumArr[j];

          if (targetE <= start) result += profit;
          if (end <= targetS) result += profit;
      }

      store.push(result);
  }

  return Math.max(...store);
};
