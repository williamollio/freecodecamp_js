function rot13(str) {

    let arr = []
    let arr1 = []
    let arr2 = []
    arr = Array.from(str)
    let code
    let i = 0
    let str1

    arr.forEach(element => {
        if (element.charCodeAt() >= 65 && element.charCodeAt() <= 77) {
            code = element.charCodeAt() + 13
            arr1[i] = code
        }
        else if (element.charCodeAt() >= 78 && element.charCodeAt() <= 90) {
            code = element.charCodeAt() - 13
            arr1[i] = code
        }
        else
            arr1.push(element.charCodeAt())
        i++;
    })

    arr1.forEach(element => arr2.push(String.fromCharCode(element)))
    str1 = arr2.join('')
    return str1
}

rot13("SERR PBQR PNZC");