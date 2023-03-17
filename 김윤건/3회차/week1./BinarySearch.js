var search = function(nums, target) {
  let start = 0;
  let end = nums.length;
  

  while(start <= end) {
      const mid = Math.floor((start + end) / 2);
      const selected = nums[mid];

      if (selected === target) return mid;
      if (selected < target) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }

  return -1;
};
