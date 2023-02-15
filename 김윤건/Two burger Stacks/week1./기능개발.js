function solution(progresses, speeds) {
  const restDays = progresses.map((prog, index) => {
    const rest = 100 - prog;
    const restDay = Math.ceil(rest / speeds[index]);
      
      return restDay;
  });
  
  const answer = [];
  
  for (let i = 0; i < restDays.length; i++) {
      const today = restDays[i];
      let day = 1;
      
      let nextDay = i + 1;
      
      while (true) {
          const next = restDays[nextDay];
          if (today >= next) {
              day++;
              nextDay++;
          }
          else break;
      }
      
      answer.push(day);
      i = nextDay - 1;
  }
  
  return answer;
}
