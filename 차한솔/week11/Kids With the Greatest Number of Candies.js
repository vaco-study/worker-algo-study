var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  const isGreatest = [];

  for (let i = 0; i < candies.length; i++) {
    const addExtraCandies = candies[i] + extraCandies;

    if (addExtraCandies >= maxCandies) {
      isGreatest.push(true);
    } else {
      isGreatest.push(false);
    }
  }

  return isGreatest;
};

// n명의 아이들
// 사탕 배열이 있고 i번째 아이들이 가지고 있는 사탕
// 추가 사탕이 있음..?
// 캔디중 가장 큰 값
