function solution(genres, plays) {
  const genreMap = genres.reduce((acc, cur, index) => {
    if (acc.has(cur)) {
      const prev = acc.get(cur);

      return acc.set(cur, {
        plays: [...prev.plays, { id: index, play: plays[index] }],
        stat: prev.stat + plays[index],
      });
    } else {
      return acc.set(cur, {
        plays: [{ id: index, play: plays[index] }],
        stat: plays[index],
      });
    }
  }, new Map());

  const album = [...genreMap.values()]
    .sort((a, b) => b.stat - a.stat)
    .map((element) =>
      element.plays.sort((a, b) => b.play - a.play).slice(0, 2),
    );

  return album.flat().map((element) => element.id);
}
