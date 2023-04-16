function solution(progresses, speeds) {
  const result = [];
  const candidateNumbers = progresses.length;
  let deployCandidateIndex = 0;

  while (deployCandidateIndex < candidateNumbers) {
    // progress update..
    for (let i = deployCandidateIndex; i < candidateNumbers; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }

    // current deploy candidate numbers checking..
    if (progresses[deployCandidateIndex] >= 100) {
      let sum = 0;

      while (
        progresses[deployCandidateIndex] &&
        progresses[deployCandidateIndex] >= 100
      ) {
        sum++;
        deployCandidateIndex++;
      }

      result.push(sum);
    }
  }

  return result;
}
