function solution(distance, rocks, n) {
  const sorted = [0, ...rocks.sort((a, b) => a - b), distance];

  let start = 0;
  let end = distance;

  while (start <= end) {
    let removedRocks = 0;
    let mid = Math.floor((start + end) / 2);
    let currentTarget = 0;

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] - currentTarget < mid) {
        removedRocks++;
      } else {
        currentTarget = sorted[i];
      }
    }

    if (removedRocks > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}
