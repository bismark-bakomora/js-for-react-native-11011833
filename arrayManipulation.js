function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // this squares even numbers
            } else {
                return number * 3; // multiply odd numbers by 3
            }

    });
}

