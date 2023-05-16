var generate = function(numRows) {
  const dp = Array.from(new Array(numRows + 1), () => new Array());
  dp[0][1] = 1;

  for (let y = 1; y <= numRows; y++) {
      for (let x = 0; x < y; x++) {
          if (x === 0 || x === y - 1) {
              dp[y][x] = 1;
          } else {
              dp[y][x] = dp[y - 1][x - 1] + dp[y - 1][x];
          }
      }
  }
  dp.shift();

  return dp;
};
