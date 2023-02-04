class Dqueue {
  constructor(arr) {
    this.items = arr.reduce(
      (acc, cur, index) => acc.set(index, cur),
      new Map(),
    );
    this.tail = arr.length - 1;
    this.head = 0;
  }

  push(e) {
    this.items.set(++this.tail, e);
  }

  shift() {
    const e = this.items.get(this.head);
    this.items.delete(this.head++);

    return e;
  }

  pop() {
    const e = this.items.get(this.tail);
    this.items.delete(this.tail--);

    return e;
  }

  unshift(e) {
    this.items.set(--this.head, e);
  }
}

function solution(rc, operations) {
  const answer = [];
  const [rowLen, colLen, midLen] = [rc.length, rc[0].length, rc[0].length - 2];
  const extractCol = (arr, colNum) => arr.map((v) => v[colNum]);

  const [left, rows, right] = [
    new Dqueue(extractCol(rc, 0)),
    rc.map((r) => new Dqueue(r.slice(1, -1))),
    new Dqueue(extractCol(rc, colLen - 1)),
  ];

  for (const operation of operations) {
    if (operation === "Rotate") {
      right.unshift(rows[0].pop());
      rows[rowLen - 1].push(right.pop());
      left.push(rows[rowLen - 1].shift());
      rows[0].unshift(left.shift());
    } else {
      left.unshift(left.pop());
      rows.unshift(rows.pop());
      right.unshift(right.pop());
    }
  }

  for (let i = 0; i < rowLen; i++) {
    const mid = [];
    for (let j = 0; j < midLen; j++) {
      mid.push(rows[i].shift());
    }

    answer.push([left.shift(), ...t, right.shift()]);
  }

  return answer;
}
