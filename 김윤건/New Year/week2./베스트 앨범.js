function solution(genres, plays) {
  const bestAlbum = [];
  const genresPlayInfo = {};
  
  genres.forEach(createGenrePlayInfo.bind(null, genresPlayInfo, plays));
  
  const sortedGenres = Object.entries(genresPlayInfo)
    .sort(sortDescendingOrder)
    .map(([genre, info]) => {
      delete info.sum;
      
      const sortedSong = Object.entries(info).sort(descendingOrder);
      
      return sortedSong;
    });
  
  sortedGenres.forEach(selectBestSong.bind(null, bestAlbum));
  
  return bestAlbum
}

function createGenrePlayInfo (genresPlayInfo, plays, genre, index) {
  if (genresPlayInfo[genre]) {
    genresPlayInfo[genre] = {
      ...genresPlayInfo[genre],
      [index]: plays[index],
      sum: genresPlayInfo[genre].sum + plays[index],
    }
  } else {
    genresPlayInfo[genre] = {
      [index]: plays[index],
      sum: plays[index],
    }
  }
}

function descendingOrder ([indexA, playsA], [indexB, playsB]) {
  return playsB - playsA;
}

function sortDescendingOrder([genreA, infoA], [genreB, infoB]) {
  return infoB.sum - infoA.sum;
}

function selectBestSong (bestAlbum, genre) {
  for (let i = 0; i < genre.length; i++) {
    if (i >= 2) break;
      
    const [index, count] = genre[i];
    bestAlbum.push(Number(index));
  }
}
