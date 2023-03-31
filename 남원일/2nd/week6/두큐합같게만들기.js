function solution(queue1, queue2) {
  var answer = -2;
  const targetValue =
    (queue1.reduce((acc, cur) => acc + cur) +
      queue2.reduce((acc, cur) => acc + cur)) /
    2;

  if (
    queue1.some((value) => value > targetValue) ||
    queue2.some((value) => value > targetValue)
  ) {
    return -1;
  }

  console.log(targetValue);

  return answer;
}

// 두개의 큐
// 하나의 큐를 골라 원소를 추출, 추출된 원소를 다른 큐에 집어넣는 작업을 통해 각 큐의 원소합이 같도록 만들려고 하는데
// 이때 필요한 작업의 최소 횟수를 구하고자 한다.
// 한번의 Pop과 한번의 Insert를 합쳐서 1회 수행으로 간주

// 필요한 작업의 최소 횟수를 Return하도록 한다.
// 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return

// 알고리즘이 뭘까?
