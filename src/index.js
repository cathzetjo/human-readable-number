module.exports = function toReadable(number) {
    if (number === 0) { return 'zero';}

    const toNinety = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (number < 20) {
        return toNinety[number];
    }

    const fromTwenty = [ "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let calc;
    let fullNumber;

    if (number < 100) {
        calc = Math.floor(number / 10);
        fullNumber = (fromTwenty[calc] + " " + toNinety[number % 10]);
    }
    else {
        calc = Math.floor(number / 100);
        const dozens = Math.floor(number % 100);
        const ones = Math.floor(dozens / 10);
        if (dozens >= 20) {
            fullNumber = toNinety[calc] + ' hundred ' + fromTwenty[ones] + " " + toNinety[dozens % 10]
        }
        else {
            fullNumber = toNinety[calc] + ' hundred ' + toNinety[dozens];
        }
    }
    return fullNumber.trim();
};
