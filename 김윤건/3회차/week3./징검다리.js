function solution(distance, rocks, n) {
  rocks.unshift(0);
  rocks.push(distance);
  rocks.sort((a, b) => a - b);
  
  const diff = rocks.reduce((acc, cur, i, src) => {
      if (!src[i + 1]) return acc;
      
      acc.push(src[i + 1] - cur);
      
      return acc;
  }, []);
  
  let left = 0;
  let right = distance;
  
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      let cur = 0;
      let removedStones = 0;
      
      diff.forEach(value => {
          cur += value;
          
          if (cur < mid) {
              removedStones++;
          } else {
              cur = 0;
          }
      });
      
      if (removedStones < n) {
          left = mid + 1;
      } else if (removedStones > n) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  
  return left - 1;
}
