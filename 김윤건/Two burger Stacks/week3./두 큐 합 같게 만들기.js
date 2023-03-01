function solution(queue1, queue2) {
  const sum = queue1.reduce((acc, cur) => acc + cur, 0) + queue2.reduce((acc, cur) => acc + cur , 0);
  
  if (sum % 2) return -1;
  
  const totalQueue = [...queue1, ...queue2];
  const target = sum / 2;
  let left = 0;
  let right = queue1.length;
  let count = 0;
  let halfSum = totalQueue.slice(left, right).reduce((acc, cur) => acc + cur, 0);
  
  while (count < totalQueue.length * 2) {
      
      
      if (halfSum === target) {
          return count;
      } else if (halfSum < target) {
          halfSum += totalQueue[right];
          right++;
      } else if (halfSum > target) {
          halfSum -= totalQueue[left];
          left++;
      }
      
      if (right > totalQueue.length) left++;
      count++;
  }
  
  return -1;
}
