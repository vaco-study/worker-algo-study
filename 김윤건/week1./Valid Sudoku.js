/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // check row
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      const elem = row[j];

      if (elem !== '.' && row.lastIndexOf(elem) !== j) {
        return false;
      }
    }
  }

  // check column
  for (let column = 0; column < board.length; column++) {
    const store = {};

    for (let row = 0; row < board[column].length; row++) {
      const elem = board[row][column];
      
      if (elem === '.') continue;
      if (store[elem]) return false;

      store[elem] = 1;
    }
  }

  // check 3 x 3
  for (let row = 0; row < board.length; row += 3) {
    for (let column = 0; column < board[row].length; column += 3) {
      const store = {};
      const firstRow = board[row].slice(column, column + 3);
      const secondRow = board[row + 1].slice(column, column + 3);
      const thirdRow = board[row + 2].slice(column, column + 3);
      const miniBoard = firstRow.concat(secondRow).concat(thirdRow);

      for (let i = 0; i < miniBoard.length; i++) {
        const elem = miniBoard[i];

        if (elem !== '.' && store[elem]) return false;

        store[elem] = 1;
      }            
    }
  }

  return true;
};
