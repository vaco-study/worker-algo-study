function solution(genres, plays) {
  const allGenresWithPlays = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];

    if (!allGenresWithPlays.has(genre)) {
      allGenresWithPlays.set(genre, {
        totalPlays: plays[i],
        songs: [{ index: i, plays: plays[i] }],
      });

      continue;
    }

    const genreWithPlay = allGenresWithPlays.get(genre);

    allGenresWithPlays.set(genre, {
      totalPlays: genreWithPlay.totalPlays + plays[i],
      songs: [...genreWithPlay.songs, { index: i, plays: plays[i] }],
    });
  }

  const sortedByTotalPlays = [...allGenresWithPlays].sort(
    (a, b) => b[1].totalPlays - a[1].totalPlays
  );

  const sortedByPlay = sortedByTotalPlays
    .map(([genre, datas]) => {
      return datas.songs.sort((a, b) => b.plays - a.plays || a.index - b.index);
    })
    .slice(0, 2)
    .map((song) => song.index);

  return sortedByPlay.flat(2);
}
