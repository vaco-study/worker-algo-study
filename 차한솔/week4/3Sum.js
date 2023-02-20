var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const sorted = nums.sort((a, b) => a - b);
  const triplets = [];
  let i = 0;

  while (i <= sorted.length - 2) {
    if (sorted[i] === sorted[i - 1]) {
      i++;
      continue;
    }

    const target = sorted[i];
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = target + sorted[left] + sorted[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        triplets.push([target, sorted[left], sorted[right]]);
        left++;
        right--;

        while (sorted[left] === sorted[left - 1] && left < right) {
          left++;
        }

        while (sorted[right] === sorted[right + 1] && left < right) {
          right--;
        }
      }
    }

    i++;
  }

  return triplets;
};
