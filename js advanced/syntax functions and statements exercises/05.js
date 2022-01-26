function walk(steps, stepLength, speed) {
  let totalRoadKm = (steps * stepLength) / 1000
  let totalRoadM = steps * stepLength
  let breakTime = Math.floor(totalRoadM / 500) * 60

  let timeNeededInSeconds = (((totalRoadKm / speed) * 3600) + breakTime).toFixed()
  let hours = Math.floor(timeNeededInSeconds / 3600);
  let minutes = Math.floor((timeNeededInSeconds - (hours * 3600)) / 60);
  let seconds = (timeNeededInSeconds - (hours * 3600) - (minutes * 60));

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  console.log(`${hours}:${minutes}:${seconds}`)
  console.log(timeNeededInSeconds)
}

walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)