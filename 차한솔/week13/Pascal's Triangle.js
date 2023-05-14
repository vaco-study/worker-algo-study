var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const triangle = [[1], [1, 1]];
  let index = 1;

  while (index < numRows - 1) {
    const newLine = [];
    const preLine = triangle[index];

    for (let i = 0; i < preLine.length; i++) {
      if (i === 0) {
        newLine.push(1);
      } else {
        newLine.push(preLine[i] + preLine[i - 1]);
      }
    }

    newLine.push(1);
    triangle.push(newLine);
    index++;

    console.log(triangle);
  }

  return triangle;
};
