/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const BLOCK_HASH_INDEX = Array.from(
    { length: 9 },
    (_, i) => Math.floor(i / 3) * 9 + (i % 3),
  );
  const PIVOT_INDEX = Array.from(
    { length: 9 },
    (_, i) => Math.floor(i / 3) * 9 * 3 + (i % 3) * 3,
  );
  const colLen = board[0].length;
  const extractCol = (arr, colNum) => arr.map((v) => v[colNum]);

  for (const row of board) {
    const rowNums = row.filter((v) => v !== ".");

    if (rowNums.length !== new Set(rowNums).size) {
      return false;
    }
  }

  for (let i = 0; i < colLen; i++) {
    const colNums = extractCol(board, i).filter((v) => v !== ".");

    if (colNums.length !== new Set(colNums).size) {
      return false;
    }
  }

  const flattenBoard = board.flat();

  for (const PIVOT of PIVOT_INDEX) {
    const block = BLOCK_HASH_INDEX.map((v) => v + PIVOT);

    const boxNums = block.map((v) => flattenBoard[v]).filter((v) => v !== ".");

    if (boxNums.length !== new Set(boxNums).size) {
      return false;
    }
  }

  return true;
};
