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

// ==== Is Alphabetical Order =========//

/* Is Vowels Ordered */
function isVowelsOrdered(str) {
    var vowels = "aeiou";
    var vowelsPos = [];

    for (var i = 0; i < str.length; i++) {
        var pos = vowels.indexOf(str[i]);

        if (pos !== -1) {
            vowelsPos.push(pos);
        }
    }
    // return vowelsPos === vowelsPos.sort(); This could do the job between 223-228.
    for (var i = 0; i < vowelsPos.length - 1; i++) {
        if (vowelsPos[i] > vowelsPos[i + 1]) {
            return false;
        }
    }
    return true;
}

/* Is Letters Alphabetical Ordered */

function isLettersOrdered(str) {
    var abc = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();

    for (var i = 0; i < str.length - 1; i++) {
        if (abc.indexOf(str[i]) > abc.indexOf(str[i + 1])) {
            return false;
        }
    }
    return true;
}

// First Letter goes to the end //

function wierdGreeting(str) {
    var veryFirstLetter = str[0];
    var firstLetterRemoved = str.split(str[0]).join("");
    var firstLetter = firstLetterRemoved[0];
    firstLetterRemoved = firstLetterRemoved
        .split(firstLetter)
        .join(firstLetter.toUpperCase());

    return firstLetterRemoved + " to the " + veryFirstLetter;
}

// Common Suffix.
// We need to helper function, one for getting the longestWord
//another for checking if given suffix exists in each word of array.
//Several ways to solve this exists, however, I wanted to split into helpers to make sure
// it is understandable and nested loops avoided;

function getCommonSuffix(words) {
    var longestWord = getShortestWord(words);
    var commonSuffix = null;
    for (var i = longestWord.length - 1; i >= 0; i--) {
        var suffix = longestWord.slice(i);
        if (isLastSuffixSame(words, suffix)) {
            commonSuffix = suffix;
        } else {
            return commonSuffix;
        }
    }
    return commonSuffix;
}
function isLastSuffixSame(words, suffix) {
    for (var i = 0; i < words.length; i++) {
        var chars = words[i].split(suffix);
        if (words[i].length === 0 || chars[chars.length - 1] !== "") {
            return false;
        }
    }
    return true;
}

function getShortestWord(words) {
    var shortest = words[0];

    for (var i = 0; i < words.length; i++) {
        if (shortest.length > words[i].length) {
            shortest = words[i];
        }
    }
    return shortest;
}

// Book Index

function bookIndex(pages) {
    var indexes = [];

    for (var i = 0; i < pages.length; i++) {
        var endIdx = getEndIdx(pages, i);
        if (i === endIdx) {
            var range = pages[endIdx];
        } else {
            var range = pages[i] + "-" + pages[endIdx];
        }
        indexes.push(range);
        i = endIdx;
    }
    return indexes.join(",");
}

function getEndIdx(pages, startIdx) {
    var startEle = pages[startIdx];
    var endIdx = startIdx;

    for (var i = startIdx; i < pages.length; i++) {
        if (startEle === pages[i + 1] - 1) {
            endIdx = i + 1;
            startEle = pages[endIdx];
        } else {
            return endIdx;
        }
    }
    return endIdx;
}

// Drop the Mike

function dropTheMike(phrase) {
    phrase = phrase.split(" ");
    if (phrase.indexOf("Mike") !== -1) {
        return "stunned silence";
    }
    var newPhrase = [];

    for (var i = 0; i < phrase.length; i++) {
        var word = phrase[i];

        if (word !== "") {
            var capitalizedWord =
                word.slice(0, 1).toUpperCase() + word.slice(1);
            newPhrase.push(capitalizedWord);
        }
    }
    return newPhrase.join(" ");
}

// Coin Change with Array

function generateChange(cents) {
    var counter = { one: 0, q: 0, d: 0, n: 0, p: 0 };

    while (cents >= 100) {
        cents -= 100;
        counter["one"] += 1;
    }
    while (cents >= 25) {
        cents -= 25;
        counter["q"] += 1;
    }
    while (cents >= 10) {
        cents -= 10;
        counter["d"] += 1;
    }
    while (cents >= 5) {
        cents -= 5;
        counter["n"] += 1;
    }
    while (cents >= 1) {
        cents -= 1;
        counter["p"] += 1;
    }
    return counter;
}

// Max, Min, Average with Object;

function minMaxAverage(numbers) {
    var obj = { min: numbers[0], max: numbers[0] };
    var sum = 0;
    var counter = 0;
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];

        if (obj["min"] > num) {
            obj["min"] = num;
        }

        if (obj["max"] < num) {
            obj["max"] = num;
        }
        sum += num;
        counter += 1;
    }
    obj["average"] = sum / counter;

    return obj;
}

// Zip Arrays into Map

function mapify(arr, arr1) {
    var zipped = {};

    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        zipped[ele] = arr1[i];
    }
    return zipped;
}

// Invert Hash

function invertHash(obj) {
    var inverted = {};

    for (var key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}

// Number of Values

function objValueCount(obj) {
    counter = 0;

    for (var key in obj) {
        counter += 1;
    }
    return counter;
}

//String.concat;
//We do not know the quantity of the string we should concat.
// So we can use built-in *arguments to iterate through unknown quantity.

function stringConcat() {
    var newStr = "";
    for (var i = 0; i < arguments.length; i++) {
        newStr += arguments[i];
    }
    return newStr;
}

// String slice

function stringSlice(str, start, end) {
    if (end === undefined) {
        end = str.length;
    }
    var slicedStr = "";

    for (var i = start; i < end; i++) {
        slicedStr += str[i];
    }

    return slicedStr;
}

//String Trim

function stringTrim(str) {
    var trimmedStr = [];
    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
        var char = words[i];
        if (char !== "" && char !== "\n" && char !== "\t") {
            trimmedStr.push(words[i]);
        }
    }
    return trimmedStr.join(" ");
}

//String split without limit Property;

function stringSplit(str, seperator) {
    var splitStr = [];
    var splitHolder = "";

    for (var i = 0; i < str.length; i++) {
        if (seperator === "") {
            splitStr.push(str[i]);
        } else {
            if (str[i] === seperator) {
                splitStr.push(splitHolder);
                splitHolder = "";
            } else {
                if (i !== str.length - 1) {
                    splitHolder += str[i];
                } else {
                    splitHolder += str[i];
                    splitStr.push(splitHolder);
                }
            }
        }
    }

    return splitStr;
}

// String Seartch

function stringSearch(str, val) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === val) {
            return i;
        }
    }
    return -1;
}
