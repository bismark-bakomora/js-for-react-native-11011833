function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // this squares even numbers
            } else {
                return number * 3; // multiply odd numbers by 3
            }

    });
}


// Task 2: Function to format array of strings based on processed numbers

function formatArrayStrings(strings, numbers) {
    return strings.map((string, index) => {
        if (numbers[index] % 2 === 0) {
            return string.map.toUpperCase(); // capitalise string if corresponding number is even
            } else {
                return string.toLowerCase(); // lowercase string if corresponding number is odd
            }
    });
}


module.exports = { processArray, formatArrayStrings};