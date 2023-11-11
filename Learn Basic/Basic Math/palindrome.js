function checkPalindrome(x) {
    if (x < 0) return false;

    let num = x;
    let reverse = 0;

    while (num !== 0) {
        let digit = num%10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num/10);
    }

    
    return reverse === x
}

const res = checkPalindrome(-121);
console.log(res)