/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const ascendingStones = stones.slice().sort((a, b) => a - b);

  while (ascendingStones.length > 1) {
    const stone1 = ascendingStones.pop();
    const stone2 = ascendingStones.pop();

    if (stone1 !== stone2) {
      ascendingStones.push(stone1 - stone2);

      ascendingStones.sort((a, b) => a - b);
    }
  }

  return ascendingStones.length ? ascendingStones[0] : 0;
};
