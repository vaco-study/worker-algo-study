function solution(fees, records) {
  const LAST_TIME = 23 * 60 + 59;
  const TYPE = { in: "IN", out: "OUT" };
  const [defaultMinute, defaultFee, unitMinute, unitFee] = fees;

  const carMaps = records.reduce((acc, cur) => {
    const [time, carNum, type] = cur.split(" ");

    const convertedTime = time.split(":")[0] * 60 + Number(time.split(":")[1]);

    switch (type) {
      case TYPE.in:
        acc.set(carNum, { ...acc.get(carNum), inTime: convertedTime });
        return acc;
      case TYPE.out:
        const parkingTime = convertedTime - acc.get(carNum).inTime;

        acc.set(carNum, {
          parkingTime: acc.get(carNum)?.parkingTime
            ? acc.get(carNum).parkingTime + parkingTime
            : parkingTime,
        });
        return acc;
    }
  }, new Map());

  carMaps.forEach(({ inTime, parkingTime }, carNum) => {
    const parkingTimeNum = parkingTime ? parkingTime : 0;
    const reducedTime =
      inTime >= 0 ? LAST_TIME - inTime + parkingTimeNum : parkingTimeNum;

    carMaps.set(
      carNum,
      reducedTime <= defaultMinute
        ? defaultFee
        : defaultFee +
            Math.ceil((reducedTime - defaultMinute) / unitMinute) * unitFee,
    );
  });

  const sortedCarMaps = new Map([...carMaps].sort());

  return [...sortedCarMaps.values()];
}
