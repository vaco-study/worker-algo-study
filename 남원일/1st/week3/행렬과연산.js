function solution(rc, operations) {
  let answer = rc;
  const rowLength = rc[0].length;
  const columnLength = rc.length;

  operations.forEach((operation) => {
    if (operation === "ShiftRow") {
      answer = shiftRow(answer);
    } else if (operation === "Rotate") {
      answer = rotate(answer);
    }
  });

  return answer;

  function shiftRow(target) {
    const targetClone = [...target];
    const lastRow = target[columnLength - 1];

    for (let i = columnLength - 2; i >= 0; i--) {
      targetClone[i + 1] = targetClone[i];
    }

    targetClone[0] = lastRow;

    return targetClone;
  }

  function rotate(target) {
    const orderList = [];
    const targetClone = [...target];

    for (let i = 0; i < rowLength - 1; i++) {
      const newObject = {};
      const changedIndex = String(0) + String(i + 1);
      newObject[changedIndex] = target[0][i];
      orderList.push(newObject);
    }

    for (let i = 0; i < columnLength - 1; i++) {
      const newObject = {};
      const changedIndex = String(i + 1) + String(rowLength - 1);
      newObject[changedIndex] = target[i][rowLength - 1];
      orderList.push(newObject);
    }

    for (let i = rowLength - 1; i >= 1; i--) {
      const newObject = {};
      const changedIndex = String(columnLength - 1) + String(i - 1);
      newObject[changedIndex] = target[columnLength - 1][i];
      orderList.push(newObject);
    }

    for (let i = columnLength - 1; i >= 1; i--) {
      const newObject = {};
      const changedIndex = String(i - 1) + String(0);
      newObject[changedIndex] = target[i][0];
      orderList.push(newObject);
    }

    orderList.forEach((order) => {
      const keyInfo = Object.keys(order);
      const rowIndex = Number(keyInfo[0][0]);
      const columnIndex = Number(keyInfo[0][1]);
      targetClone[rowIndex][columnIndex] = order[keyInfo];
    });

    return targetClone;
  }
}
