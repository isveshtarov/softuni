function barcodeGenerator(input) {

    let startBarcode = '' + input[0];
    let endBarcode = '' + input[1];

    let startPart1 = Number(startBarcode[0]);
    let startPart2 = Number(startBarcode[1]);
    let startPart3 = Number(startBarcode[2]);
    let startPart4 = Number(startBarcode[3]);

    let endtPart1 = Number(endBarcode[0]);
    let endtPart2 = Number(endBarcode[1]);
    let endtPart3 = Number(endBarcode[2]);
    let endtPart4 = Number(endBarcode[3]);

    let buff = '';

    for (a = startPart1; a <= endtPart1; a++) {
        for (b = startPart2; b <= endtPart2; b++) {
            for (c = startPart3; c <= endtPart3; c++) {
                for (d = startPart4; d <= endtPart4; d++) {
                    if (a % 2 !== 0 && b % 2 !==0 && c % 2 !==0 && d % 2 !==0 ) {
                        buff += '' + a + b + c + d + ' ';
                    }
                }
            }
        }
    }
    console.log(buff);
}

barcodeGenerator([2345, 6789])