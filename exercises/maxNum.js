function maxNum(input) {
    let index = 0;
    let command = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop") {
        let num = Number(command);
        if (num < minNum) {
            minNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(minNum);
}

maxNum(["45",
"-20",
"7",
"99",
"Stop"])