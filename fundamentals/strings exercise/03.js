function solve(input) {
    let index = input.lastIndexOf('\\')
    let file = input.substring(index + 1).split('.')
    let extension = file.pop();
    let template = file.join('.')
    console.log(`File name: ${template}`)
    console.log(`File extension: ${extension}`)
}

solve('C:\\Projects\\Data-Structures\\Linked.List.cs')