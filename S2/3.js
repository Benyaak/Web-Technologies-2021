// Return an array of numbers as strings.

const convertList = (numbers) => {
    return numbers.split(' ');
}

// Return an array of numbers.

const convertStrings = (numbers) => {
    let result = [];
    const splitString = numbers.split(' ');
    for (const string of splitString) {
        result.push(Number(string));
    }
    return result;
}

console.log(convertList('1 2 3 4 5 6'));
console.log(convertStrings('1 2 3 4 5 6'));