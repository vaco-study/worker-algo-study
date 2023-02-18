function solution(progresses, speeds) {
  const result = [];

  let maxDuration = Math.ceil((100 - progresses[0]) / speeds[0]);
  let counter = 1;

  for (let i = 1; i < progresses.length; i++) {
    const duration = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (maxDuration < duration) {
      result.push(counter);

      maxDuration = duration;
      counter = 1;
    } else {
      counter++;
    }
  }

  result.push(counter);

  return result;
}
