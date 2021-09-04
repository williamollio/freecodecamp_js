function telephoneCheck(str) {

    let one = 0
    if (str[0] == 1)
        one = 1
    if ((str.replace(/[^0-9]/g, "").length == 11) && one)
         return true
    // else if (str.replace(/[^0-9]/g, "").length == 10)
    //     return true
    // else
    //     return false
}

telephoneCheck("555-555-5555");