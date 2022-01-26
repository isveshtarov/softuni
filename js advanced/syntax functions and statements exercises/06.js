function solve(speed, area) {
  let speedLimit = 0;
  let speedDifference = 0;
  let status = '';

  let calcInfraction = function () {
    speedDifference = speed - speedLimit;
    if (speedDifference <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
      if (speedDifference <= 20) {
        status = 'speeding'
      } else if (speedDifference > 20 && speedDifference <= 40) {
        status = 'excessive speeding'
      } else {
        status = 'reckless driving'
      }
      console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
  }

  switch (area) {
    case 'motorway':
      speedLimit = 130
      calcInfraction();
      break;
    case 'interstate':
      speedLimit = 90
      calcInfraction();
      break;
    case 'city':
      speedLimit = 50
      calcInfraction();
      break;
    case 'residential':
      speedLimit = 20
      calcInfraction();
      break;
  }
}

solve (40, 'city')
solve (200, 'motorway')