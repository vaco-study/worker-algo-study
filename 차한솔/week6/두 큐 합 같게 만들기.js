// 1차 풀이 - 통과
function solution(queue1, queue2) {
  let subTotalQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let subTotalQ2 = queue2.reduce((acc, cur) => acc + cur, 0);

  const totalSum = subTotalQ1 + subTotalQ2;
  const averageSum = totalSum / 2;

  const copyQ1 = [...queue1];
  const copyQ2 = [...queue2];

  let i = 0;
  let j = 0;
  let count = 0;
  let success = false;

  while (count < queue1.length * 3) {
    if (subTotalQ1 === averageSum && subTotalQ2 === averageSum) {
      success = true;
      break;
    }

    if (subTotalQ1 < averageSum && subTotalQ2 > averageSum) {
      subTotalQ1 = subTotalQ1 + copyQ2[j];
      subTotalQ2 = subTotalQ2 - copyQ2[j];

      copyQ1.push(copyQ2[j]);

      j++;
    } else if (subTotalQ1 > averageSum && subTotalQ2 < averageSum) {
      subTotalQ1 = subTotalQ1 - copyQ1[i];
      subTotalQ2 = subTotalQ2 + copyQ1[i];

      copyQ2.push(copyQ1[i]);

      i++;
    }

    count++;
  }

  return success ? count : -1;
}

// 리팩토링 풀이

function solution(queue1, queue2) {
  let subTotalQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let subTotalQ2 = queue2.reduce((acc, cur) => acc + cur, 0);

  const averageSum = (subTotalQ1 + subTotalQ2) / 2;

  const totalQueue = [...queue1, ...queue2];

  let i = 0;
  let j = queue1.length;
  let count = 0;
  let success = false;

  while (count < queue1.length * 3) {
    if (subTotalQ1 === averageSum) {
      success = true;
      break;
    }

    if (subTotalQ1 < averageSum) {
      subTotalQ1 = subTotalQ1 + totalQueue[j % totalQueue.length];

      j++;
    } else if (subTotalQ1 > averageSum) {
      subTotalQ1 = subTotalQ1 - totalQueue[i % totalQueue.length];

      i++;
    }

    count++;
  }

  return success ? count : -1;
}
