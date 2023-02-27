module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const dozens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number >= 0 && number < 20) {
        return digits[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return dozens[number / 10];
        } else {
            return `${dozens[Math.floor(number / 10)]} ${digits[number % 10]}`;
        }
    } else if (number >= 100 && number <= 999) {
        if (number % 100 === 0) {
            return digits[number / 100] + " hundred";
        } else if (number % 10 === 0) {
            return (
                digits[Math.floor(number / 100)] +
                " hundred " +
                dozens[Math.floor((number % 100) / 10)]
            );
        } else {
            return `${digits[Math.floor(number / 100)]} hundred ${
                digits[number % 100] ||
                dozens[Math.floor((number % 100) / 10)] +
                    " " +
                    digits[number % 10]
            }`;
        }
    }
};
