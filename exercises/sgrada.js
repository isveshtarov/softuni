function sgrada(input) {

    let floors = Number(input[0]);
    let flats = Number(input[1]);


    for (i = floors; i >= 1; i--) {
        let buff = '';
        for (z = 0; z < flats; z++) {
            if (i === floors) {
                buff += 'L' + i + z + ' ';
            } else if (i % 2 === 0) {
                buff += 'O' + i + z + ' ';
            } else {
                buff += 'A' + i + z + ' ';
            }
        }
        console.log(buff)
    }
}

sgrada(["6", "4"])