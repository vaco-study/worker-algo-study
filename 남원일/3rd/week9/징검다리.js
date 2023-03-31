function solution(distance, rocks, n) {
  var answer = 0;
  const sortedRocks = [...rocks].sort((a, b) => a - b);

  console.log(sortedRocks);

  return answer;
}

// distance 도착지점까지의 거리
// rocks 바위가 놓여져 있는 위치
// n 제거할 바위의 수
// 바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중에 가장 큰 값을 return 하도록
// 가능한 넓게 넓게 징검다리를 분포시키려고 하는 것임

// 돌을 n개 제거해야 함
