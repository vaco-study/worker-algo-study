function solution(stones, k) {
  var answer = 0;
  let copyStones = [...stones];
  const minValue = Math.min(...stones);
  let flag = false;

  copyStones = copyStones.map((item) => item - minValue);

  let start = 0;
  for (let i = 0; i < k; i++) {
    start += copyStones[i];
  }

  for (let i = 1; i < copyStones.length - k + 1; i++) {
    start -= copyStones[i - 1];
    start += copyStones[i + k];

    if (start === 0) {
      flag = true;
      break;
    }
  }

  answer = minValue;

  if (flag) {
    // 1씩 증가시키면서 복구
    while (flag) {
      copyStones = copyStones.map((item) => item + 1);
      answer -= 1;

      let start1 = 0;

      for (let i = 0; i < k; i++) {
        start1 += copyStones[i];
      }

      for (let i = 1; i < copyStones.length - k + 1; i++) {
        start1 -= copyStones[i - 1];
        start1 += copyStones[i + k - 1];

        if (start === 0) {
          break;
        }
      }

      flag = false;
    }
  } else {
    // 1씩 감소시키면서 찾기
    while (!flag) {
      copyStones = copyStones.map((item) => Math.max(0, item - 1));
      answer += 1;

      let start1 = 0;

      for (let i = 0; i < k; i++) {
        start1 += copyStones[i];
      }

      for (let i = 1; i < copyStones.length - k + 1; i++) {
        start1 -= copyStones[i - 1];
        start1 += copyStones[i + k - 1];

        if (start === 0) {
          break;
        }
      }

      flag = true;
    }
  }

  return answer;
}

// 징검다리는 일렬로 놓여 있음, 징검다리 디딤돌에는 모두 숫자가 적혀 있음, 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듬
// 디딤돌의 숫자가 0이되면 더 이상 밝을 수 없음. 이 때는 그 다음 디딤돌로 한번에 여러칸을 건너 띌 수 있다.
// 다음 밝을 수 있는 디딤돌이 여러개인 경우 무조건 가장 가까운 디딤돌만 뛸수 있다.
// stones: 디딤돌 숫자 정보 배열
// k : 디딤돌의 최대 칸수

// k이상 칸수가 차 있으면 쥐쥐
// 전체를 1씩 줄인다.

// k이상 차이가 나는 칸을 찾는다. 그 값의 최소값을 리턴한다.
// K이상 차이가 나는 칸이 없는 경우 k명까지 보낼수 있다.
