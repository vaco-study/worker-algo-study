function solution(genres, plays) {
  const bestAlbum = [];
  const genresPlayInfo = {};
  
  genres.forEach(createGenrePlayInfo.bind(null, genresPlayInfo, plays));
  
  const sortedGenres = Object.entries(genresPlayInfo)
    .sort(sortAscendingOrder)
    .map(([genre, info]) => {
      delete info.sum;
      
      const sortedSong = Object.entries(info).sort(ascendingOrder);
      
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

function ascendingOrder ([indexA, playsA], [indexB, playsB]) {
  return playsB - playsA;
}

function sortAscendingOrder([genreA, infoA], [genreB, infoB]) {
  return infoB.sum - infoA.sum;
}

function selectBestSong (bestAlbum, genre) {
  for (let i = 0; i < genre.length; i++) {
    if (i >= 2) break;
      
    const [index, count] = genre[i];
    bestAlbum.push(Number(index));
  }
}
// 재생된 장르 > 장르네 재생수 > 고유 번호 낮은 순
