function solution(genres, plays) {
  const answer = [];
  const genresObj = {};
  const genresPlaysObj = {};
  const genresPointsList = [];

  for (let i = 0; i < genres.length; i++) {
    const currentGenres = genres[i];
    const currentPlays = plays[i];

    genresObj[currentGenres]
      ? (genresObj[currentGenres] += currentPlays)
      : (genresObj[currentGenres] = currentPlays);
  }

  for (const genresPoints in genresObj) {
    genresPointsList.push({
      genre: genresPoints,
      points: genresObj[genresPoints],
    });
  }

  genresPointsList.sort((a, b) => b.points - a.points);

  for (let i = 0; i < genres.length; i++) {
    const currentGenres = genres[i];
    const currentPlays = plays[i];

    genresPlaysObj[currentGenres]
      ? genresPlaysObj[currentGenres].push(currentPlays)
      : (genresPlaysObj[currentGenres] = [currentPlays]);
  }

  for (const playListGenres in genresPlaysObj) {
    genresPlaysObj[playListGenres]
      .sort((a, b) => b - a)
      .splice(2, genresPlaysObj[playListGenres].length);
  }

  for (let i = 0; i < genresPointsList.length; i++) {
    const currentGenre = genresPointsList[i].genre;
    const currentGenrePoints = genresPlaysObj[currentGenre];
    const visitedIndex = [];

    for (let j = 0; j < currentGenrePoints.length; j++) {
      const currentPoint = currentGenrePoints[j];

      for (let k = 0; k < genres.length; k++) {
        const currentOriginalGenre = genres[k];

        if (
          currentOriginalGenre === currentGenre &&
          !visitedIndex.includes(k)
        ) {
          if (plays[k] === currentPoint) {
            answer.push(k);
            visitedIndex.push(k);

            break;
          }
        }
      }
    }
  }

  return answer;
}

// Test Case
solution(["classic", "pop", "pop", "classic"], [500, 500, 500, 500]);
// solution(
//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]
// );
