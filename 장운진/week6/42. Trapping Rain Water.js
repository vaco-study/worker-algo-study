/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let answer = 0;
  let maxHeight = Math.max(...height);

  while (maxHeight > 0) {
    let firstPointer = null;
    let secondPointer = null;

    for (let i = 0; i < height.length; i++) {
      if (height[i] >= maxHeight) {
        firstPointer = i;

        break;
      }
    }

    for (let i = height.length - 1; i > 0; i--) {
      if (height[i] >= maxHeight) {
        secondPointer = i;

        break;
      }
    }

    if (firstPointer === secondPointer) {
      maxHeight--;
      firstPointer = null;
      secondPointer = null;

      continue;
    }

    for (let i = firstPointer; i < secondPointer; i++) {
      if (height[i] < maxHeight) {
        answer++;
      }
    }

    maxHeight--;
  }

  return answer;
};
