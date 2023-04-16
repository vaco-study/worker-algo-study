var totalFruit = function (fruits) {
  let result = 0;
  let compareArray = [];
  let currentCount = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (compareArray.length === 0) {
      compareArray.push(fruits[i]);
      currentCount++;

      continue;
    }

    if (compareArray.includes(fruits[i])) {
      currentCount++;

      continue;
    }

    if (compareArray.length === 1) {
      compareArray.push(fruits[i]);
      currentCount++;

      continue;
    }

    i = i - currentCount;
    result = Math.max(result, currentCount);
    compareArray = [];
    currentCount = 0;
  }

  return Math.max(result, currentCount);
};
