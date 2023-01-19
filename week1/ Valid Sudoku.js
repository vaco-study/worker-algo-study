/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let isFail = false;
  let freqCounter = {};
  const boardSize = board.length;
  const subSize = Math.sqrt(boardSize);

  for (let i = 0; i < boardSize; i++) {
    checkRow(i, boardSize);
    if (isFail) return false;
  }

  for (let i = 0; i < boardSize; i++) {
    checkColumn(i, boardSize);
    if (isFail) return false;
  }

  for (let i = 0; i < subSize; i++) {
    for (let j = 0; j < subSize; j++) {
      checkSubBox(i, j);
      if (isFail) return false;
    }
  }

  return true;

  function checkRow(row, size) {
    for (let i = 0; i < size; i++) {
      if (board[row][i] !== ".") {
        if (!freqCounter[board[row][i]]) {
          freqCounter[board[row][i]] = true;
        } else {
          isFail = true;
          break;
        }
      }
    }

    freqCounter = {};
  }

  function checkColumn(column, size) {
    for (let i = 0; i < size; i++) {
      if (board[i][column] !== ".") {
        if (!freqCounter[board[i][column]]) {
          freqCounter[board[i][column]] = true;
        } else {
          isFail = true;
          break;
        }
      }
    }

    freqCounter = {};
  }

  function checkSubBox(row, column) {
    const startRow = 3 * row;
    const startColumn = 3 * column;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startColumn; j < startColumn + 3; j++) {
        if (board[i][j] !== ".") {
          if (!freqCounter[board[i][j]]) {
            freqCounter[board[i][j]] = true;
          } else {
            isFail = true;
            break;
          }
        }
      }
    }

    freqCounter = {};
  }
};
