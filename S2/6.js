const exampleString = 'The Web Technologies lab is my favourite this semester';

const getRelativeFrequency = (string) => {
    const result = {};
    for (const letter of string) {
        if (letter !== ' ') {
            if (letter in result) {
                result[letter]++;
            } else {
                result[letter] = 1;
            }
        }
    }
    for (const letter in result) {
        result[letter] /= string.length;
    }

    return result;
}

console.log(getRelativeFrequency(exampleString));