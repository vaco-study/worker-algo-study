/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  const maxSero = Math.max(...height);
  const heightCounter = {};

  height.forEach((value, index) => {
    if (!heightCounter[value]) {
      heightCounter[value] = [index];
    } else {
      heightCounter[value] = [...heightCounter[value], index];
    }
  });

  Object.keys(heightCounter).forEach((targetHeight) => {
    const targetMinValue = heightCounter[targetHeight][0];
    const targetMaxValue =
      heightCounter[targetHeight][heightCounter[targetHeight].length - 1];

    for (let i = targetHeight; i <= maxSero; i++) {
      if (!heightCounter[i]) continue;

      const compareMinValue = heightCounter[i][0];
      const compareMaxValue = heightCounter[i][heightCounter[i].length - 1];

      result = Math.max(
        result,
        targetHeight * Math.abs(targetMinValue - compareMaxValue)
      );
      result = Math.max(
        result,
        targetHeight * Math.abs(targetMaxValue - compareMinValue)
      );
    }
  });

  return result;
};

// 실패 , 시간복잡도를 더 줄여야 함

// 모범 답안

var maxArea = function (height) {
  let ans = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  return ans;
};
