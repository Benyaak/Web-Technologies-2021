// Example 1

const concatStringsA = (arrayOfStrings) => {
    let result = '';
    for (let string of arrayOfStrings) {
        result += string;
    }

    return result;
}

// Example 2

const concatStringsB = function (arrayOfStrings) {
    let result = '';
    for (let i = 0; i < arrayOfStrings.length; i++) {
        result += arrayOfStrings[i];
    }

    return result;
}

// Example 3

function concatStringsC(arrayOfStrings) {
    let result = '';
    for (let string of arrayOfStrings) {
        result += string;
    }

    return result;
}

// Example 4

const concatStringsD = (arrayOfStrings) => {
    let result = '';
    arrayOfStrings.forEach((string) => {
        result += string;
    });

    return result;
}

// Note: You can use any of the FOR structure versions, it doesn't matter.
strings = ['Ana ', 'owns ', 'the shop.'];

console.log(concatStringsA(strings));
console.log(concatStringsB(strings));
console.log(concatStringsC(strings));
console.log(concatStringsD(strings));