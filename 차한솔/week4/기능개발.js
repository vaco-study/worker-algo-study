function solution(progresses, speeds) {
  const totalDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  const result = [];

  let count = 0;
  let i = 0;
  let j = i + 1;

  while (i <= totalDays.length - 1) {
    count++;

    if (i === totalDays.length - 1 || j === totalDays.length) {
      result.push(count);
      count = 0;
      break;
    }

    if (totalDays[i] < totalDays[j]) {
      result.push(count);
      count = 0;
      i = j;
      j = i + 1;
    } else {
      j++;
    }
  }

  return result;
}
