const countDiff = (first, second) => {
    if (first.length !== second.length) {
        return -1;
    }
    let count = 0;
    for(let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            count++;
        }
    }
    return count;
}

console.log(countDiff('watch', 'watch'));
console.log(countDiff('car', 'cat'));
console.log(countDiff('car', 'cars'));