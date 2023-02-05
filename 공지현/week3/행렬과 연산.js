const solution = (rc, operations) => {
  let result = [...rc];

  for (const operation of operations) {
    if (operation === "Rotate") {
      result = rotate(result);
    } else {
      result = shiftRow(result);
    }
  }

  return result;
};

const rotate = (rc) => {
  let lastItem;

  for (let i = 0; i < rc.length; i++) {
    const currentRow = rc[i];
    const nextRow = rc[i + 1];

    if (i === 0) {
      lastItem = currentRow.pop();
      currentRow.unshift(nextRow.shift());
    } else if (i === rc.length - 1) {
      currentRow.push(lastItem);
    } else {
      const temp = currentRow.pop();
      currentRow.push(lastItem);
      lastItem = temp;
      currentRow.unshift(nextRow.shift());
    }
  }

  return rc;
};

const shiftRow = (rc) => {
  rc.unshift(rc.pop());

  return rc;
};
