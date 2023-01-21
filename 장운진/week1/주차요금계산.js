function solution(fees, records) {
  const [basicT, basicM, scaleT, scaleM] = fees;
  let list = new Map();

  for (let i = 0; i < records.length; i++) {
    const [time, car, state] = records[i].split(" ");

    if (state === "IN") {
      if (!list.get(car)) {
        list.set(car, [time, 0]);
      } else {
        const [_, savetime] = list.get(car);

        list.set(car, [time, savetime]);
      }
    } else if (state === "OUT") {
      const [lasttime, savetime] = list.get(car);

      list.set(car, ["out", savetime + tc(time) - tc(lasttime)]);
    }
  }

  for (let key of list.keys()) {
    const [lasttime, savetime] = list.get(key);

    if (lasttime !== "out") {
      list.set(key, ["out", savetime + tc("23:59") - tc(lasttime)]);
    }
  }

  let answer = Array.from(list);

  for (let i = 0; i < answer.length; i++) {
    if (answer[i][1][1] <= basicT) {
      answer[i][1] = basicM;
    } else {
      answer[i][1] =
        basicM + Math.ceil((answer[i][1][1] - basicT) / scaleT) * scaleM;
    }
  }

  answer = answer.sort((a, b) => a[0] - b[0]);
  answer = answer.map((v) => v[1]);

  return answer;
}

function tc(time) {
  const [h, m] = String(time).split(":");

  return Number(h) * 60 + Number(m);
}
