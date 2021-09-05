function telephoneCheck(str) {
    const nbr_par = /\(|\)/g;
    const btw_par = /\(([^)]+)\)/g;
    var regExp = /\(([^)]+)\)/;
    let matches = str.match(regExp);
    const nbr_dash = /\-/g;
    const qst_mark = /\?/g;

    if (((str.match(nbr_par) || []).length) % 2 != 0)
        return false
    else if (matches && matches[1].length > 3)
        return false
    else if ((str.match(nbr_dash) || []).length > 2)
        return false
    else if (str.match(qst_mark))
        return false
    else if (str[0] == 1
        && (str.replace(/[^0-9]/g, "").length == 11))
        return true
    else if (str.replace(/[^0-9]/g, "").length == 10)
        return true
    else
        return false
}

telephoneCheck("1 456 789 4444")