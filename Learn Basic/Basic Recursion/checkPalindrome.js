function palindrome(i, s) {

    if (i >= s.length/2) return true;

    if (s[i] !== s[s.length - i -1]) return false;

    return palindrome(i+1, s);
}

console.log(palindrome(0, "romesh"))