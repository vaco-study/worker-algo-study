/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];

  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    if (stones[0] === stones[1]) {
      stones.shift();
      stones.shift();
    } else {
      stones[1] = stones[0] - stones[1];
      stones.shift();
    }
  }

  return stones.length ? stones[0] : 0;
};
