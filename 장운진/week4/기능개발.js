function solution(progresses, speeds) {
  const answer = [];
  const progressList = generateProgressCompleteList(progresses, speeds);
  let sum = 0;

  for (let i = 0; i < progressList.length; i++) {
    const currentProgressList = progressList[i];
    const tempAns = [currentProgressList];
    let index = 0;

    for (let j = i + 1; j < progressList.length; j++) {
      if (progressList[j] <= currentProgressList) {
        tempAns.push(progressList[j]);
        index++;
      } else {
        i += index;

        break;
      }
    }

    sum += tempAns.length;

    if (sum > progressList.length) break;

    answer.push(tempAns.length);
  }

  return answer;
}

const generateProgressCompleteList = (progressesList, speedsList) => {
  const arr = [];

  for (let i = 0; i < progressesList.length; i++) {
    const currentTask = progressesList[i];
    const currentSpeed = speedsList[i];
    const lackingPercentage = 100 - currentTask;
    const daysToCompleteTask = Math.ceil(lackingPercentage / currentSpeed);

    arr.push(daysToCompleteTask);
  }

  return arr;
};

// Best 정답
// 아래 처럼 생각은 했지만 코드로 표현하기가 너무 어려웠습니다..

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
