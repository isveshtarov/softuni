function cake(input) {
    let index = 0;
    let cakeWidth = Number(input[index++]);
    let cakeLength = Number(input[index++]);
    let command = input[index++];
    let totalPiecesTaken = 0;
    let availablePieces = cakeWidth * cakeLength;

    while (command !== 'STOP') {
        let takenPieces = Number(command);
        totalPiecesTaken += takenPieces;
        if (totalPiecesTaken > availablePieces) {
            console.log(`No more cake left! You need ${totalPiecesTaken - availablePieces} pieces more.`);
            break;
        }
        command = input[index++];
    }

    if (availablePieces >= totalPiecesTaken) {
        console.log(`${availablePieces - totalPiecesTaken} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
