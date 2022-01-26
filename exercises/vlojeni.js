function vlojeni(input) {
    let startIndex = Number(input[0]);
    let endIndex = Number(input[1]);
    let magic = Number(input[2]);
    let counter = 0;
    isFound = false;

    for (i = startIndex; i <= endIndex; i++) {
        for (h = startIndex; h <= endIndex; h++) {
            counter++;
            if ((i + h) === magic) {
                console.log(`Combination N:${counter} (${i} + ${h} = ${magic})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magic}`)
    }
}


vlojeni(["88",
    "888",
    "2000"])
