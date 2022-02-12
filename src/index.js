const objNum = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}

function numTwo(n) {
    const strNumb = String(n);
    let resultStr = '';

    if (strNumb <= 19) {
        return resultStr = objNum[strNumb];
    }

    if (strNumb.length === 2 && strNumb > 19) {
        if (strNumb[1] == 0) {
            return resultStr = objNum[strNumb]
        } else {
            return resultStr = objNum[strNumb[0] + '0'] + ' ' + objNum[strNumb[1]]
        }
    }
}

module.exports = function toReadable(number) {
    const strNumb = String(number);
    let resultStr = '';

    if (strNumb.length < 3) {
        return numTwo(number);
    }

    if (strNumb.length === 3) {
        if (strNumb[1] == 0 && strNumb[2] == 0) {
            return resultStr = objNum[strNumb[0]] + ' hundred'
        } else {
            return resultStr = objNum[strNumb[0]] + ' hundred ' + numTwo(Number(strNumb[1] + strNumb[2]))
        }
    }
}
