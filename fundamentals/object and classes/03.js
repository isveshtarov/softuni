function jsonParse(stringy) {
    let obj = JSON.parse(stringy)

    let objEntries = Object.entries(obj)
    for (const [key, value] of objEntries) {
        console.log(`${key}: ${value}`)
    }
}