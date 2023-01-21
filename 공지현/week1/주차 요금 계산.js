const solution = (fees, records) => {
  const [baseTime, baseRate, minute, minuteRate] = fees;

  const carWithTimes = {};
  const result = [];

  for (const record of records) {
    const [time, carNumber, _] = record.split(" ");

    if (!carWithTimes.hasOwnProperty(carNumber)) carWithTimes[carNumber] = [];

    carWithTimes[carNumber].push(time);
  }

  const ascendingCars = Object.keys(carWithTimes).sort(
    (prev, curr) => Number(prev) - Number(curr)
  );

  for (const ascendingCar of ascendingCars) {
    const times = carWithTimes[ascendingCar.toString()];

    let totalMinute = 0;

    for (let i = 0; i < times.length; i += 2) {
      totalMinute += getTimeDiff(times[i], times[i + 1] ?? "23:59");
    }

    result.push(
      totalMinute < baseTime
        ? baseRate
        : baseRate + Math.ceil((totalMinute - baseTime) / minute) * minuteRate
    );
  }

  return result;
};

const getTimeDiff = (start, end) => {
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");

  const diffHour = endHour - startHour;
  const diffMinute = endMinute - startMinute;

  if (diffHour === 0) return endMinute - startMinute;

  const diffHourIntoMinutes = diffHour * 60;

  return diffHourIntoMinutes + diffMinute;
};
