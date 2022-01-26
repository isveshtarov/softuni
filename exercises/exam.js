function exam (input) {
    let index = 0;
    let acceptedLowGrades = Number(input[index++]);
    // index++;
    let exerName = input[index++];
    // index++;
    let grade = Number(input[index++]);
    // index++;


    let exerCount = 0;
    let lastEx = exerName;
    let sumGrades = 0;
    let poorGradesCounter = 0;
    let enough = false;


    while (exerName !== "Enough") {
        sumGrades += grade;
        if (grade <= 4) {
            poorGradesCounter++;
            if (acceptedLowGrades === poorGradesCounter) {
                enough = true;
                break;
            }
        }

        lastEx = exerName;
        exerName = input[index++];
        // index++;
        grade = Number(input[index++]);
        // index++;

        exerCount++;

    }

    if (enough) {
        console.log(`You need a break, ${poorGradesCounter} poor grades.`);
    } else {
        console.log(`Average score: ${(sumGrades/exerCount).toFixed(2)}`);
        console.log(`Number of problems: ${exerCount}`);
        console.log(`Last problem: ${lastEx}`);
    }
}

exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
