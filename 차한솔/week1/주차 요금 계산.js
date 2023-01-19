//23:59분을 분으로 바꾼 값
const endOfDayInMuniutes = 1439

function solution(fees, records) {
	const vehicles = new Map();
	const totalVehiclesFee = [];	

	for (const record of records) {
	  const [time, carNumber, status] = record.split(" ");
	  const timeConvertToMinutes = time.split(":").reduce((acc, cur) => acc * 60 + Number(cur))	

	  if (!vehicles.has(carNumber)) {
	    vehicles.set(carNumber, {
	      currentStatus: status,
	      carNumber,
	      arrivedTime: timeConvertToMinutes,
	      totalTime: 0,
	    })
	    continue;
	  }	

	  const vehicleInHash = vehicles.get(carNumber);	

	  if (status === "OUT") {
	    vehicles.set(carNumber, {
	      ...vehicleInHash,
	      currentStatus: status,
	      arrivedTime: 0,
	      totalTime: (timeConvertToMinutes - vehicleInHash.arrivedTime) + vehicleInHash.totalTime,
	    })
	  } else {
	    vehicles.set(carNumber, {
	      ...vehicleInHash,
	      currentStatus: status,
	      arrivedTime: timeConvertToMinutes,
	    })
	  }
	}	
	const sortedCarNames = [...vehicles.keys()].sort()	

	for(const carName of sortedCarNames) {
	  const vehicle = vehicles.get(carName);
	  const totalTime = vehicle.totalTime;
	  let totalFee;	

  if (vehicle.currentStatus === "OUT") {
    totalFee = getTotalFees(fees, totalTime);
    } else {
      const totalMinutes = (endOfDayInMuniutes - vehicle.arrivedTime) + totalTime
    	totalFee = getTotalFees(fees, totalMinutes);
    }

    totalVehiclesFee.push(totalFee);
  }
  return totalVehiclesFee;
}

function getTotalFees (fees, totalMinutes) {
  const [defaultMinute, defaultFee, unitMinute, unitFee] = fees;
  
	if (totalMinutes <= defaultMinute) {
    return defaultFee
  } else {
    const unitMinutes = Math.ceil((totalMinutes - defaultMinute) / unitMinute);

    return defaultFee + (unitMinutes * unitFee)
  }
}
  