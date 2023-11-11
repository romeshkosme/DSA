function countDigit(n) {
    let x = n;
    let count = 0;
    while (x !== 0) {
        x = Math.floor(x/10);
        count++;
    }

    console.log(count);
}

countDigit(299)