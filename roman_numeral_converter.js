function convertToRoman(num) {

    const romans = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    let roman = "";

    while (num) {
        while (num >= 1000) {
            roman += romans[1000]
            num -= 1000;
        }
        if (num >= 900) {
            roman += romans[900]
            num -= 900;
        }
        if (num >= 500) {
            roman += romans[500]
            num -= 500;
        }
        if (num >= 400) {
            roman += romans[400]
            num -= 400;
        }
        else if (num >= 100) {
            roman += romans[100]
            num -= 100;
        }
        else if (num >= 90) {
            roman += romans[90]
            num -= 90;
        }
        else if (num >= 50) {
            roman += romans[50]
            num -= 50;
        }
        else if (num >= 40) {
            roman += romans[40]
            num -= 40;
        }
        else if (num >= 10) {
            roman += romans[10]
            num -= 10;
        }
        else if (num >= 9) {
            roman += romans[9]
            num -= 9;
        }
        else if (num >= 5) {
            roman += romans[5]
            num -= 5;
        }
        else if (num >= 4) {
            roman += romans[4]
            num -= 4;
        }
        else if (num >= 1) {
            roman += romans[1]
            num -= 1;
        }
    }
    return roman
}

convertToRoman(3999);