function solve (arr1, arr2) {
    let isIdentical = true;
    let sum = 0;

    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }
    if(isIdentical) {
        for (unparsed of arr1) {
            sum += Number(unparsed);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}