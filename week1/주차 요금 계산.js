function solution(fees, records) {
  const parkingChecker = {};
  const timeCounter = {};

  const revisedRecords = records.map((record) => record.split(" "));

  for (const record of revisedRecords) {
    const [time, carNumber] = record;

    if (!parkingChecker[carNumber]) {
      parkingChecker[carNumber] = time;
      continue;
    }

    const timeDiff = calculateTimeDiff(time, parkingChecker[carNumber]);

    timeCounter[carNumber] = timeCounter[carNumber]
      ? timeCounter[carNumber] + timeDiff
      : timeDiff;
    parkingChecker[carNumber] = null;
  }

  for (const carNumber in parkingChecker) {
    if (!parkingChecker[carNumber]) continue;

    const timeDiff = calculateTimeDiff("23:59", parkingChecker[carNumber]);

    timeCounter[carNumber] = timeCounter[carNumber]
      ? timeCounter[carNumber] + timeDiff
      : timeDiff;
  }

  return Object.keys(timeCounter)
    .sort((a, b) => a - b)
    .map((carNumber) => {
      if (timeCounter[carNumber] > 0) {
        return calculateFare(timeCounter[carNumber], fees);
      }
    });
}

function calculateTimeDiff(a, b) {
  const minutesA = Number(a[0] + a[1]) * 60 + Number(a[3] + a[4]);
  const minutesB = Number(b[0] + b[1]) * 60 + Number(b[3] + b[4]);

  return minutesA > minutesB ? minutesA - minutesB : minutesB - minutesA;
}

function calculateFare(totalUsingTime, fees) {
  const [BASIC_TIME, BASIC_FARE, TIME_UNIT, FARE_UNIT] = fees;

  if (totalUsingTime <= BASIC_TIME) return BASIC_FARE;

  return (
    BASIC_FARE +
    Math.ceil((totalUsingTime - BASIC_TIME) / TIME_UNIT) * FARE_UNIT
  );
}
