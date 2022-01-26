function solve(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('')

    for (let i = 0; i < input.length; i++) {
        if (password === input[i]) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (i > 2) {
            console.log(`User ${username} blocked!`)
            break
        } else {
            console.log('Incorrect password. Try again.')
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny'])

// 2, 3, 6, 7, and 10