function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let clas = 1;

    let isExpelled = false;
    let poorGradeCount = 0;

    let sumGrade = 0;

    while (clas <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            poorGradeCount++;

            if (poorGradeCount === 2) {
                isExpelled = true;
                break;
            }
            continue;
        }

        sumGrade += grade;
        clas++;
    }

    if (isExpelled) {
        console.log(`${name} has been excluded at ${clas} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
