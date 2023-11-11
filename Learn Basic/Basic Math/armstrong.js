function armstrong(n) {
    let num = n;
    const digits = [];

    while(num !== 0) {
        let digit = num%10;
        digits.push(digit);
        num = Math.floor(num/10);
    }

    let total = digits.reduce((acc, digit) => {
        acc += Math.pow(digit, digits.length);
        return acc;
    }, 0);
    
    return total === n;
}

armstrong(153);