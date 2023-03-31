/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let isFail = false;
  let freqCounter = {};
  const boardSize = board.length;
  const subSize = Math.sqrt(boardSize);

  for (let i = 0; i < subSize; i++) {
    for (let j = 0; j < subSize; j++) {
      checkSubBox(i, j);
      if (isFail) return false;
    }
  }

  for (let i = 0; i < boardSize; i++) {
    checkLine("row", i, boardSize);
    if (isFail) return false;
  }

  for (let i = 0; i < boardSize; i++) {
    checkLine("column", i, boardSize);
    if (isFail) return false;
  }

  return true;

  function checkLine(rowOrColumn, targetIndex, size) {
    for (let i = 0; i < size; i++) {
      const targetElement =
        rowOrColumn === "row" ? board[targetIndex][i] : board[i][targetIndex];

      if (targetElement !== ".") {
        if (freqCounter[targetElement]) {
          isFail = true;
          break;
        }

        freqCounter[targetElement] = true;
      }
    }

    freqCounter = {};
  }

  // function checkRow(row, size) {
  //   for (let i = 0; i < size; i++) {
  //     if (board[row][i] !== ".") {
  //       if (freqCounter[board[row][i]]) {
  //         isFail = true;
  //         break;
  //       }

  //       freqCounter[board[row][i]] = true;
  //     }
  //   }

  //   freqCounter = {};
  // }

  // function checkColumn(column, size) {
  //   for (let i = 0; i < size; i++) {
  //     if (board[i][column] !== ".") {
  //       if (freqCounter[board[i][column]]) {
  //         isFail = true;
  //         break;
  //       }

  //       freqCounter[board[i][column]] = true;
  //     }
  //   }

  //   freqCounter = {};
  // }

  function checkSubBox(row, column) {
    const startRow = 3 * row;
    const startColumn = 3 * column;

    for (let i = startRow; i < startRow + subSize; i++) {
      for (let j = startColumn; j < startColumn + subSize; j++) {
        if (board[i][j] !== ".") {
          if (freqCounter[board[i][j]]) {
            isFail = true;
            break;
          }

          freqCounter[board[i][j]] = true;
        }
      }
    }

    freqCounter = {};
  }
};
