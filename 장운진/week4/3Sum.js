/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const edgeCase = nums.filter((item) => item !== 0);

  if (edgeCase.length === 0) return [[0, 0, 0]];

  const ans = [];
  let prevValue = "";

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const firstNum = nums[i];
        const secondNum = nums[j];
        const thirdNum = nums[k];

        if (JSON.stringify([firstNum, secondNum, thirdNum]) === prevValue)
          break;

        if (firstNum + secondNum + thirdNum === 0) {
          prevValue = JSON.stringify([firstNum, secondNum, thirdNum]);

          ans.push([firstNum, secondNum, thirdNum]);
        }
      }
    }
  }

  const ansCopy = [...ans]
    .map((arr) => arr.sort((a, b) => a - b))
    .map((arr) => JSON.stringify(arr));

  const uniqueAnswers = {};

  for (const item of ansCopy) {
    uniqueAnswers[item]
      ? (uniqueAnswers[item] = 1)
      : (uniqueAnswers[item] += 1);
  }

  return Object.keys(uniqueAnswers).map((item) => JSON.parse(item));
};

// Most Voted Answer
var threeSum = function (nums) {
  // 먼저 정렬을 해줌
  nums.sort((a, b) => a - b);

  const result = [];

  if (nums.length < 3) return result; // early 리턴

  for (let i = 0; i < nums.length; i++) {
    // 투 포인터 기법 사용한것으로 보임

    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        let arr = [nums[i], nums[left], nums[right]];
        result.push(arr);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};
