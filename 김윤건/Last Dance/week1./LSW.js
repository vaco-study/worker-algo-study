var lastStoneWeight = function(stones) {
  stones.sort((a, b) => a - b);

  while (stones.length >= 2) {
      const first = stones.pop();
      const second = stones.pop();

      if (first !== second) {
          const newStone = first - second;
          stones.push(newStone);
          stones.sort((a, b) => a - b);
      }
  }
  
  return stones;
};
