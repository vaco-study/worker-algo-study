function solution(gems) {
  const uniqueGems = [...new Set(gems)];

  let firstIndexes = [];

  for (const uniqueGem of uniqueGems) {
    firstIndexes.push(gems.indexOf(uniqueGem));
  }

  const result = firstIndexes.slice();

  do {
    firstIndexes = result.slice();

    for (let i = 0; i < uniqueGems.length; i++) {
      const nextIndex = gems.indexOf(uniqueGems[i], firstIndexes[i] + 1);

      if (
        nextIndex !== -1 &&
        nextIndex < firstIndexes[firstIndexes.length - 1]
      ) {
        result[i] = nextIndex;
      }
    }
  } while (firstIndexes.join("") !== result.join(""));

  return [Math.min(...result) + 1, Math.max(...result) + 1];
}
