let arr = [1,2,3];

if (arr.includes(2)) {
    console.log('Yes');
}

let joined = arr.join(0);

console.log(joined)

joined += 100

console.log(joined)

console.log(typeof joined)

joined = Number(joined);

console.log(typeof joined)