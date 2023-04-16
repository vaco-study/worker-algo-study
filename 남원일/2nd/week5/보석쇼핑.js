function solution(gems) {
  const answer = [1, gems.length];
  const gemsVarietyNums = new Set(gems).size;
  const freqCounter = new Map();
  let left = 0;
  let right = 0;

  //left와 right을 0으로 한다는 것은 0번째 인덱스 보석은 이미 처리되었음을 의미.
  freqCounter.set(gems[0], 1);

  // 진열대의 보석 커버범위가 주어진 gems의 범위 이내여야 한다.
  while (left <= gems.length - 1 && right <= gems.length - 1) {
    // 현재 freqCounter의 엔트리의 개수와 보석의 종류의 개수가 같다면
    if (freqCounter.size === gemsVarietyNums) {
      // 새로운 범위가 현재 범위보다 더 최적화되어 있다면 새로운 범위로 바꾼다.
      if (answer[1] - answer[0] > right - left) {
        answer = [left + 1, right + 1];
      }

      // left 이동. 왼쪽이동시 빠지는 값의 카운팅 횟수를 1줄이되 그것의 개수가 0이되면 목록에서 delete한다.
      freqCounter.set(gems[left], freqCounter.get(gems[left]) - 1);

      if (freqCounter.get(gems[left]) === 0) {
        freqCounter.delete(gems[left]);
      }

      left++;

      // 개수가 같지 않다면 오른쪽 보석을 하나 추가해본다.
    } else {
      // right 이동
      right++;
      const currentGemFreq = freqCounter.get(gems[right]);
      freqCounter.set(gems[right], currentGemFreq ? currentGemFreq + 1 : 1);
    }
  }

  return answer;
}
