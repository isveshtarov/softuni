function examTime(input) {
    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMinute = Number(input[3])

    let arrivalTime = (arrivalHour * 60) + arrivalMinute;
    let examTime = (examHour * 60) + examMinute;

    let resultH = 0;
    let resultM = 0;

    if (arrivalTime <= examTime && examTime - arrivalTime <= 30) {
        console.log('On time');
        if (arrivalTime !== examTime) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        }
    } else if (examTime - arrivalTime > 30) {
        console.log('Early');
        if (examTime - arrivalTime <= 59) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } else {
            resultH = Math.floor((examTime - arrivalTime) / 60);
            resultM = (examTime - arrivalTime) % 60;
            if (resultM.toString().length == 1) {
                resultM = '0' + resultM;
            }
            console.log(`${resultH}:${resultM} hours before the start`)
        }
    } else if (arrivalTime > examTime) {
        console.log('Late');
        if (arrivalTime - examTime <= 59) {
            console.log(`${arrivalTime - examTime} minutes after the start`);
        } else {
            resultH = Math.floor((arrivalTime - examTime) / 60);
            resultM = (arrivalTime - examTime) % 60;

            if (resultM.toString().length == 1) {
                resultM = '0' + resultM;
            }
            console.log(`${resultH}:${resultM} hours after the start`)
        }
    }
}