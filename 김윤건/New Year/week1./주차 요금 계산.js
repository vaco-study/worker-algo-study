function solution(fees, records) {
  const answer = [];
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const timeStore = {};
  
  records.forEach(record => {
      const [time, carNumber, state] = record.split(' ');
      const [hour, min] = time.split(':');
      const convertedTime = +hour * 60 + +min;
      
      if (state === 'IN') {
          timeStore[carNumber] = {
              ...timeStore[carNumber],
              inTime: convertedTime,
          };
      } else {
          const sumTime = timeStore[carNumber].sumTime ? timeStore[carNumber].sumTime : 0;
          
          timeStore[carNumber] = {
              outTime: convertedTime,
              sumTime: sumTime + convertedTime - timeStore[carNumber].inTime,
              inTime: null,
          };
      }
  });
  
  const sortedTimeStore = Object.keys(timeStore).sort((a, b) => a - b).reduce((newStore, key) => {
      newStore.push(timeStore[key]);
      
      return newStore;
  }, []);
  
  sortedTimeStore.forEach((info, carNumber) => {
      if (info.inTime || info.inTime === 0) {
          const convertedTime = 23 * 60 + 59;
          const sumTime = info.sumTime ? info.sumTime : 0;
          
          sortedTimeStore[carNumber] = {
              ...sortedTimeStore[carNumber],
              sumTime: sumTime + convertedTime - info.inTime,
              inTime: null,
          }
      }
      
      const parkingFee = sortedTimeStore[carNumber].sumTime > defaultTime ?
                defaultFee + Math.ceil((sortedTimeStore[carNumber].sumTime - defaultTime) / unitTime) * unitFee :
                defaultFee;
          
      answer.push(parkingFee);
  });
  
  return answer;
}
