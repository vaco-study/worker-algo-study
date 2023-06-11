var exist = function(board, word) {
  let isFound = false;

  for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[0].length; x++) {
          if (board[y][x] === word[0]) {
              dfs(y, x, 0);

              if (isFound) return true;
          }
      }
  }

  function dfs(y, x, index) {
      const movings = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      if (!isFound) {
          if (y < 0 || y >= board.length || x < 0 || x >= board[0].length) return;
          if (board[y][x] !== word[index]) return;
          if (index === word.length - 1) {
              isFound = true;
              return;
          }

          board[y][x] = null;

          for (let i = 0; i < 4; i++) {
              const [my, mx] = movings[i];
              const [ny, nx] = [y + my, x + mx];

              dfs(ny, nx, index + 1);
          }

          board[y][x] = word[index];
      }
  }

  return isFound;
};
