var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);

  const store = new Set();

  for (let start = 0; start < nums.length - 1; start++) {
      let mid = start + 1;
      let end = nums.length - 1;

      while (mid < end) {
          const [a, b, c] = [nums[start], nums[mid], nums[end]];
          const sum = a + b + c;

          if (sum < 0) {
              mid++;
          }

          if (sum > 0) {
              end--;
          }
          
          if (sum === 0) {
              store.add(JSON.stringify([a, b, c]));
              
              mid++;
          }
      }
  }

  const result = [];
  
  store.forEach(val => {
      result.push(JSON.parse(val));
  });

  return result;
};
