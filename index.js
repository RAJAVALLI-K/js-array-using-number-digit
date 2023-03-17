let array = [1, 47, 780, 906, 5679, 89078];
function numDigit(array) {
    let numDigitArray = [];
    for (let i = 0; i < array.length; i++) {
        //numDigitArray.push(array[i]);
        numDigitArray.push(array[i].toString().length);

    }
    return numDigitArray;
}
console.log(numDigit(array));
document.write("Number digit calculate in array:" + (numDigit(array)));