function solve(input) {
    index = 0;
    let command = input[index];
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (num > maxNum) {
            maxNum = num;
        }

        command = input[index];
        index++;
    }
}