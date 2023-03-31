function solution(genres, plays) {
  const answer = [];
  const counterByGenres = {};

  genres.forEach((genre, id) => {
    counterByGenres[genre] = (counterByGenres[genre] || 0) + plays[id];
  });

  const sortedGenres = Object.keys(counterByGenres).sort(
    (a, b) => counterByGenres[b] - counterByGenres[a]
  );

  let first;
  let second;

  sortedGenres.forEach((genre) => {
    for (let i = 0; i < genres.length; i++) {
      if (i === 0) {
        first = undefined;
        second = undefined;
      }

      if (genres[i] !== genre) continue;

      if (first === undefined) {
        first = i;
        continue;
      }

      if (plays[i] > plays[first]) {
        second = first;
        first = i;
        continue;
      }

      if (plays[i] === plays[first]) {
        if (i < first) {
          second = first;
          first = i;
          continue;
        } else {
          second = i;
          continue;
        }
      }

      if (second === undefined) {
        second = i;
        continue;
      }

      if (plays[i] > plays[second]) {
        second = i;
        continue;
      }

      if (plays[i] === plays[second]) {
        if (i < second) {
          second = i;
          continue;
        }
      }
    }

    answer.push(first);
    if (second !== undefined) answer.push(second);
  });

  return answer;
}
