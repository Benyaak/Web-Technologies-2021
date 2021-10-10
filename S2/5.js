const fibbonaci = (order) => {
    switch (order) {
        case 0:
        case 1:
            return 1;
        default:
            return fibbonaci(order - 1) + fibbonaci(order - 2);
    }
}

if (process.argv.length <= 2) {
    console.log('Not enough arguments');
} else {
    console.log(fibbonaci(parseInt(process.argv[2])));
}