function palindrome(str) {

    let str1;
    let length;
    let i;
    let flag = 0;

    str1 = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    length = str1.length;
    for (i = 0; i < length; i++) {
        if (str1[i] !== str1[length - 1])
            flag = 1;
        length--;
    }
    if (flag === 1)
        return false
    else
        return true
}

palindrome("A man, a plan, a canal. Panama");