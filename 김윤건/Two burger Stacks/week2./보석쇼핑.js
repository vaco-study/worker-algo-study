function solution(gems) {
  const targetLength = new Set(gems).size;
  const partedSet = new Set();
  const answer = [];
  let start = 0;
  let last = start + 1;
  
  while (start < gems.length) {
      const sliced = gems.slice(start, last);
      const comparedLength = new Set(sliced).size;
      
      if (comparedLength === targetLength) {
          start++;
          answer.push([start, last]);
      } else {
          last++;
          
          if (last === gems.length + 1) {
              start++;
              last--;
          }
      }
  }
  
  const sortedAnswer = answer.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));
  
  return sortedAnswer[0];
}
