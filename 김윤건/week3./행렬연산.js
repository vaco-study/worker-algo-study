function solution(rc, operations) {
  var answer = [[]];
  const operation = {
      Rotate: rotate,
      ShiftRow: shiftRow,
  }
  
  operations.forEach(op => {
      rc = operation[op](rc)
  });
  
  answer = rc;
  return answer;
}

function shiftRow(arr) {
const shiftedArr = [arr.pop(), ...arr];

return shiftedArr;
}

function rotate(arr) {
  const top = arr.shift();
  const right = [];
  
  for (let y = 0; y < arr.length - 1; y++) {
    right.push(arr[y][arr[y].length - 1]);
  }
  
  const bottom = arr.pop().reverse();
  
  const left = [];
  
  for (let y = 0; y < arr.length; y++) {
    left.push(arr[y][0]);
  }
  
  const lastArr = [...top, ...right, ...bottom, ...left];
  
  const rotatedArr = [lastArr.pop(), ...lastArr];

  arr.unshift(rotatedArr.splice(0, arr[0].length));
  
  for (let y = 1; y < arr.length; y++) {
    arr[y][arr[y].length - 1] = rotatedArr.shift()
  }
  
  arr.push(rotatedArr.splice(0, arr[0].length).reverse());
  
  for (let y = 1; y < arr.length - 1; y++) {
    arr[y][0] = rotatedArr.shift()
  }
  
  return arr;
}
