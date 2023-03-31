/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  let result = 0;
  const data = profit
    .map((value, index) => [startTime[index], endTime[index], value])
    .sort((a, b) => a[0] - b[0]);

  console.log(data);

  const midTime = Math.floor((startTime[0] + endTime[endTime.length - 1]) / 2);
  const finishTime = endTime[endTime.length - 1];
  const initTime = startTime[0];

  for (let t = initTime; t < midTime; t++) {
    let sum = 0;
    let startTime = t;

    while (t < finishTime) {
      // data에서 t와 일치하는 것 찾는 경우
      // -> 해당 data의 profit을 sum에 더해주고
      // -> t를 해당 data의 endTime으로 교체한다.

      const targetArr = data.filter((item) => item[0] === t);

      if (targetArr.length > 0) {
        let sum = 0;
        let startTime = t;
        for (let i = 0; i < targetArr.length; i++) {
          sum += targetArr[i][2];
          startTime = targetArr[i][1];

          while (startTime < finishTime) {}
        }

        t++;
      } else {
        t++;
      }
    }
  }
};

// startTime과 endTime은 짝을 이룸, 시작과 끝
// 각 job에 대한 profit이 배열로 주어짐
// 두개의 job은 중첩될 수 없음
// 취할 수 있는 최대 이익을 구해라

// time range를 어떻게 잘 배치할 수 있을까?
