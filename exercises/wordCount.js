function wordCount(input) {
    let text = input[0];
    let splitText = text.split(' ');
    if (splitText.length > 10) {
        console.log(`The message is too long to be send! Has ${splitText.length} words.`);
    } else {
        console.log('The message was sent successfully!');
    }
}