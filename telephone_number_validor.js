function telephoneCheck(str) {

    /* Match open or closed parentheses */
    const nbr_par = /\(|\)/g;

    /* Capture characters in between parentheses */
    const regExp = /\(([^)]+)\)/;
    let matches = str.match(regExp);

    const nbr_dash = /\-/g;
    const qst_mark = /\?/g;

    /* Check if the number of parentheses is even */
    if (((str.match(nbr_par) || []).length) % 2 != 0)
        return false

    else if (matches && matches[1].length > 3)
        return false

    /* Check if the number of dashes isn't up to 2*/
    else if ((str.match(nbr_dash) || []).length > 2)
        return false

    /* Check if there is a question mark */
    else if (str.match(qst_mark))
        return false

    /* Count the number of digits */
    else if (str.replace(/[^0-9]/g, "").length == 10)
        return true
    else if (str[0] == 1
        && (str.replace(/[^0-9]/g, "").length == 11))
        return true
    else
        return false
}

telephoneCheck("1 456 789 4444")