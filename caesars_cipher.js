function rot13(str){

    let arr = []
    let arr1 = []
    let arr2 = []

    /* Create an array of letters*/
    arr = Array.from(str)

    let code
    let i = 0
    let str1

    /* Apply the substitution cipher ROT13 on each letter by modifying their ASCII Code.
    ** And build a new array with their new ASCII Code*/
    arr.forEach(element => {
        if (element.charCodeAt() >= 65 && element.charCodeAt() <= 77) {
            code = element.charCodeAt() + 13
            arr1[i] = code
        }
        else if (element.charCodeAt() >= 78 && element.charCodeAt() <= 90) {
            code = element.charCodeAt() - 13
            arr1[i] = code
        }
        /* Push the spaces on the array without modification */
        else
            arr1.push(element.charCodeAt())
        i++;
    })

    /* Build an array from ASCII Code to characters */
    arr1.forEach(element => arr2.push(String.fromCharCode(element)))

    /* Recreate the string to return */
    str1 = arr2.join('')
   return str1
}

rot13("SERR PBQR PNZC");