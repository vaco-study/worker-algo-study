// 1차 풀이 - 효율성 미통과
function solution(rc, operations) {
  let answer = JSON.parse(JSON.stringify(rc));

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "Rotate") {
      answer = getRotate(answer);
    } else {
      answer = getShiftRow(answer);
    }
  }

  return answer;
}

const getShiftRow = (rc) => {
  const copied = JSON.parse(JSON.stringify(rc));
  const shifted = [];

  copied.forEach((arr, index) => {
    if (index === copied.length - 1) {
      shifted[0] = arr;
      return;
    }

    shifted[index + 1] = arr;
    return;
  });

  return shifted;
};

const getRotate = (rc) => {
  const copied = JSON.parse(JSON.stringify(rc));

  for (let column = 0; column < rc.length; column++) {
    const currentColumn = rc[column];

    if (column === 0) {
      for (let row = 0; row < currentColumn.length; row++) {
        const value = rc[column][row];

        if (row === currentColumn.length - 1) {
          copied[column + 1][row] = value;
        } else {
          copied[column][row + 1] = value;
        }
      }
    } else if (column === rc.length - 1) {
      for (let row = 0; row < currentColumn.length; row++) {
        const value = rc[column][row];

        if (row === 0) {
          copied[column - 1][row] = value;
        } else {
          copied[column][row - 1] = value;
        }
      }
    } else {
      const firstRow = rc[column][0];
      const endRow = rc[column][currentColumn.length - 1];

      copied[column - 1][0] = firstRow;
      copied[column + 1][currentColumn.length - 1] = endRow;
    }
  }

  return copied;
};
