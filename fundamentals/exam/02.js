function solve(input) {
    let friendsNames = input.shift().split(", ");
    input.pop();
    let blacklistCounter = 0;
    let lostCounter = 0;

    for (i = 0; i < input.length; i++) {
        let command = input[i].split(" ")

        switch (command[0]) {
            case 'Blacklist':
                for (j = 0; j < friendsNames.length; j++) {
                    if (command[1] === friendsNames[j] && friendsNames[j] !== 'Blacklisted'){
                        console.log(`${command[1]} was blacklisted.`)
                        blacklistCounter++
                        friendsNames[j] = 'Blacklisted'
                        break;
                    } else {
                        console.log(`${command[1]} was not found.`)
                        break;
                    }
                }
            break;

            case 'Error':
                if (command[1] >= 0 && command[1] < friendsNames.length && friendsNames[command[1]] !== 'Blacklisted' && friendsNames[command[1]] !== 'Lost') {
                    console.log(`${friendsNames[command[1]]} was lost due to an error.`);
                    friendsNames[command[1]] = 'Lost';
                    lostCounter++
                }
            break;

            case 'Change':
                if (command[1] >= 0 && command[1] < friendsNames.length) {
                    console.log(`${friendsNames[command[1]]} changed his username to ${command[2]}.`)
                    friendsNames[command[1]] = command[2];
                }
            break;
        }

    }
    console.log(`Blacklisted names: ${blacklistCounter}`)
    console.log(`Lost names: ${lostCounter}`)
    console.log(friendsNames.join(" "))
}

solve(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])


solve(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])

solve(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])