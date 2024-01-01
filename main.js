function checkNumberType() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    // Use parseFloat to convert the input to a floating-point number
    const number = parseFloat(numberInput);

    if (Number.isInteger(number)) {
        resultElement.textContent = number + ' is an integer.';
    } else if (!isNaN(number)) {
        resultElement.textContent = number + ' is a float.';
    } else {
        resultElement.textContent = 'Invalid input. Please enter a valid number.';
    }
}