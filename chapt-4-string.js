const removeAt = (words, pos) => {
    if (pos > words.length - 1) {
        return "Not Valid Position";
    }
    for (let i = pos; i < words.length - 1; i++) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
    }
    words.pop();
    return words;
};

// Remove Blanks
const removeBlanks = (str) => {
    return str.split(" ").join("");
};

//  Get Digits
const getDigits = (str) => {
    let digits = [];

    for (let char of str) {
        if (Number.isInteger(parseInt(char))) {
            digits.push(char);
        }
    }
    return parseInt(digits.join(""));
};

// Acronyms
const acronyms = (str) => {
    let words = str.split(" ");
    let capitals = [];

    for (let word of words) {
        if (word !== "") {
            capitals.push(word[0].toUpperCase());
        }
    }
    return capitals.join("");
};

// Count non-spaces
const countNonSpaces = (str) => {
    let counter = 0;

    for (let char of str) {
        if (char !== " ") counter++;
    }

    return counter;
};

// Remove shorter strings
const removeShorterStrings = (words, limit) => {
    return words.filter((word) => word.length >= limit);
};

// Reverse string
const reverseString = (str) => {
    let chars = str.split("");
    let length = chars.length;

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        [chars[i], chars[length - 1 - i]] = [[chars[length - 1 - i]], chars[i]];
    }

    return chars.join("");
};

// Remove Even-length strings
const removerEvenLengthStrings = (words) => {
    return words.filter((word) => word.length % 2 !== 0);
};

// Integers to Roman Numerals
const integerToRoman = (number) => {
    let romanNum = [];
    let romans = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    let divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < divisors.length; i++) {
        let div = divisors[i];
        if (number === 0) break;
        let result = Math.floor(number / div);
        number = number % div;
        for (let j = 1; j <= result; j++) {
            romanNum.push(romans[i]);
        }
    }
    return romanNum.join("");
};

//Romans to Integers
const romanToInteger = (roman) => {
    let romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let number = romans[roman[roman.length - 1]];
    if (roman.length === 1) {
        return romans[roman];
    }

    for (let i = 0; i < roman.length - 1; i++) {
        let current = roman[i];
        let next = roman[i + 1];
        if (romans[current] > romans[next]) {
            number += romans[current];
        } else {
            number -= romans[current];
        }
    }
    return number;
};

// is Parenthesis valid ? ab(!dc()) => valid, ()) => notValid,
const isValidParenthesis = (str) => {
    let stack = [];

    for (let char of str) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            let popped = stack.pop();
            if (popped !== "(") return false;
        }
    }

    return stack.length === 0;
};

// are braces valid?
const isValidBraces = (str) => {
    let stack = [];
    let opening = new Set(["[", "{", "("]);
    let closing = new Set(["]", "}", ")"]);
    let pairs = { "(": ")", "[": "]", "{": "}" };

    for (let char of str) {
        if (opening.has(char)) {
            stack.push(char);
        } else if (closing.has(char)) {
            let lastOpened = stack.pop();
            if (pairs[lastOpened] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// is string palindrome?
const isPalindrome = (str) => {
    let mid = Math.floor(str.length / 2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

const isSoftPalindrome = (str) => {
    let chars = new Set(["!", ",", "?", ".", " "]);
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (!chars.has(str[start]) && !chars.has(str[end])) {
            if (str[start].toLowerCase() !== str[end].toLowerCase()) {
                return false;
            } else {
                start++, end--;
            }
        } else if (chars.has(str[start])) {
            start++;
        } else if (chars.has(str[end])) {
            end--;
        }
    }

    return true;
};

// Is Vowels Ordered
const isVowelsOrdered = (str) => {
    const dict = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    let vowels = [];

    for (let char of str) {
        if (dict[char]) vowels.push(char);
    }

    for (let i = 0; i < vowels.length - 1; i++) {
        let prev = vowels[i];
        let next = vowels[i + 1];

        if (dict[prev] > dict[next]) return false;
    }
    return true;
};

// Is Letters Alphabetical Ordered
const isAlphabeticalOrdered = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
        let prev = str[i];
        let next = str[i + 1];
        if (prev.charCodeAt() > next.charCodeAt()) {
            return false;
        }
    }
    return true;
};

// First Letter goes to the end
function wierdGreeting(str) {
    var veryFirstLetter = str[0];
    var firstLetterRemoved = str.split(str[0]).join("");
    var firstLetter = firstLetterRemoved[0];
    firstLetterRemoved = firstLetterRemoved
        .split(firstLetter)
        .join(firstLetter.toUpperCase());

    return firstLetterRemoved + " to the " + veryFirstLetter;
}

// D Gets Jiggy
const dGetsJiggy = (name) => {
    if (name.length === 1) return "Name should contain at least 2 letters";
    return `${name[1].toUpperCase()}${name.slice(2)} to the ${name[0]}!`;
};

// Common Suffix.
const commonSuffix = (words) => {
    let hash = { "": 1 };

    for (let word of words) {
        for (let i = word.length - 1; i >= 0; i--) {
            let suffix = word.slice(i);
            if (hash[suffix]) {
                hash[suffix]++;
            } else {
                hash[suffix] = 1;
            }
        }
    }

    let largestSuffix = "";

    for (let suffix in hash) {
        if (hash[suffix] === words.length) {
            if (hash[largestSuffix] < hash[suffix]) {
                largestSuffix = suffix;
            } else if (
                hash[largestSuffix] === hash[suffix] &&
                largestSuffix.length < suffix.length
            ) {
                largestSuffix = suffix;
            }
        }
    }
    return largestSuffix;
};

// Book Index
const bookIndex = (indices) => {
    let groupedIndices = [];
    let idx = 0;

    while (idx < indices.length) {
        let start = idx;
        while (indices[idx] === indices[idx + 1] - 1) {
            idx++;
        }
        if (start !== idx) {
            groupedIndices.push(`${indices[start]}-${indices[idx]}`);
        } else {
            groupedIndices.push(indices[idx]);
        }
        idx++;
    }
    return groupedIndices.join(",");
};

// Drop the Mike
function dropTheMike(phrase) {
    if (phrase.indexOf("Mike") !== -1) return "stunned silence";
    let words = phrase.slice(1, phrase.length - 1).split(" ");

    return words
        .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(" ");
}

// Coin Change with Array
const generateChange = (cents) => {
    let counter = { 100: 0, 25: 0, 10: 0, 5: 0, 1: 0 };
    let amounts = [100, 25, 10, 5, 1];

    for (let amount of amounts) {
        counter[amount] = Math.floor(cents / amount);
        cents %= amount;
    }
    return counter;
};

// Find min, max and average of array of numbers
const minMaxAverage = (numbers) => {
    let obj = { min: numbers[0], max: numbers[0], average: null };
    let sum = 0;

    for (let number of numbers) {
        if (obj.min > number) {
            obj.min = number;
        }

        if (obj.max < number) {
            obj.max = number;
        }
        sum += number;
    }
    obj.average = sum / numbers.length;

    return obj;
};

// Zip Arrays into Map
const zipArraysIntoMap = (arr1, arr2) => {
    let map = new Map();

    arr1.forEach((ele, idx) => {
        map.set(ele, arr2[idx]);
    });
    return map;
};

// Invert Hash
const invertHash = (obj) => {
    let invertedObj = {};

    for (let key in obj) {
        invertedObj[obj[key]] = key;
    }
    return invertedObj;
};
// Number of Values
const objValueCount = (obj) => {
    let counter = 0;

    for (let key in obj) {
        counter += 1;
    }
    return counter;
};

// String.concat;

const stringConcat = (...strings) => {
    return strings.join("");
};

// String slice
const stringSlice = (str, start, end) => {
    if (end === undefined || end > str.length) {
        end = str.length;
    }
    if (start > str.length - 1) return "";
    let sliced = [];

    for (let i = start; i < end; i++) {
        sliced.push(str[i]);
    }
    return sliced.join("");
};

//String Trim
const stringTrim = (str) => {
    let start = 0;
    let end = str.length - 1;

    while (str[start] === " ") {
        start++;
    }
    while (str[end] === " ") {
        end--;
    }

    return str.slice(start, end + 1);
};

//String split without limit Property;
const stringSplit = (str, seperator) => {
    let chars = [];
    let temp = [];
    let matches = [];
    let i = 0;
    let j = 0;

    if (seperator === "") {
        for (let char of str) {
            chars.push(char);
        }
    } else if (seperator === undefined) {
        chars = [str];
    } else {
        while (i < str.length) {
            if (str[i] !== seperator[0]) {
                temp.push(str[i]);
                i++;
            } else {
                while (seperator[j] === str[i + j] && j < seperator.length) {
                    matches.push(seperator[j]);
                    j++;
                }
                if (j === seperator.length) {
                    matches = [];
                    if (temp.length) {
                        chars.push(temp.join(""), "");
                    } else {
                        chars.push("");
                    }
                    temp = [];
                } else {
                    temp = [...temp, ...matches];
                    matches = [];
                }
                i += j;
                j = 0;
            }
        }
    }
    chars.push([...temp, ...matches].join(""));

    return chars;
};

// String Seartch
const stringSearch = (str, val) => {
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === val[0]) {
            while (str[i + j] === val[j] && j < val.length) {
                j++;
            }

            if (j === val.length) {
                return true;
            } else {
                j = 0;
            }
        }
    }
    return -1;
};
