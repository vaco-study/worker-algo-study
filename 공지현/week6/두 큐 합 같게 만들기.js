function solution(queue1, queue2) {
  let queue1Sum = queue1.reduce((prev, curr) => prev + curr, 0);
  let queue2Sum = queue2.reduce((prev, curr) => prev + curr, 0);

  let queue1Index = 0;
  let queue2Index = 0;

  let counter = 0;

  const maxCounter = (queue1.length + queue2.length) * 2;

  while (queue1Sum !== queue2Sum && counter <= maxCounter) {
    if (queue1Sum > queue2Sum) {
      const shifted = queue1[queue1Index];

      queue2.push(shifted);

      queue1Sum -= shifted;
      queue2Sum += shifted;

      queue1Index++;
    } else {
      const shifted = queue2[queue2Index];

      queue1.push(shifted);

      queue1Sum += shifted;
      queue2Sum -= shifted;

      queue2Index++;
    }

    counter++;
  }

  return counter <= maxCounter ? counter : -1;
}
