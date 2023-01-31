const solution = (genres, plays) => {
  const LIMIT = 2;

  const album = {};
  const result = [];

  for (let i = 0; i < genres.length; i++) {
    if (!album.hasOwnProperty(genres[i])) album[genres[i]] = [];

    album[genres[i]].push({ [i]: plays[i] });
  }

  const playsByGenre = Object.values(album);

  const playsByTotalCount = playsByGenre
    .slice()
    .sort(
      (a, b) =>
        b.reduce((sum, play) => sum + Object.values(play)[0], 0) -
        a.reduce((sum, play) => sum + Object.values(play)[0], 0)
    );

  for (let i = 0; i < playsByTotalCount.length; i++) {
    const playsByCount = playsByTotalCount[i]
      .slice()
      .sort((c, d) => Object.values(d)[0] - Object.values(c)[0]);

    for (let j = 0; j < LIMIT; j++) {
      if (!playsByCount[j]) break;

      result.push(Number(Object.keys(playsByCount[j])[0]));
    }
  }

  return result;
};
