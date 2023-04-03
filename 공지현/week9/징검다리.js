function solution(distance, rocks, n) {
  const START = 0;
  const END = distance;
  const SLICE_LENGTH = rocks.length - n;

  const ascendingRocks = rocks.sort((a, b) => a - b);

  let maxDiff = 0;

  for (let i = 0; i + SLICE_LENGTH <= ascendingRocks.length; i++) {
    const sliced = ascendingRocks.slice(i, i + SLICE_LENGTH);

    let minDiff = distance;

    for (let j = 0; j < sliced.length; j++) {
      if (j === 0) minDiff = Math.min(sliced[j] - START, minDiff);
      else if (j === sliced.length - 1)
        minDiff = Math.min(END - sliced[j], minDiff);
      else minDiff = Math.min(sliced[j + 1] - sliced[j], minDiff);
    }

    maxDiff = Math.max(minDiff, maxDiff);
  }

  return maxDiff;
}
