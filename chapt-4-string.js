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

// Integers to Roman Numerals//

//This challenge is confusing. You must specify 349 as CCCIL, but as real It must be CCCXLIX according to
//http://www.rapidtables.com/convert/number/roman-numerals-converter.htm. However, they both represent same number.
function romanify(number) {
    var romanNum = "";
    var romans = [
        "M",
        "IM",
        "CM",
        "D",
        "XD",
        "CD",
        "C",
        "IC",
        "XC",
        "L",
        "IL",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    var numbers = [
        1000, 999, 900, 500, 490, 400, 100, 99, 90, 50, 49, 40, 10, 9, 5, 4, 1
    ];

    for (var i = 0; i < numbers.length; i++) {
        while (number >= numbers[i]) {
            number -= numbers[i];
            romanNum += romans[i];
        }
    }
    return romanNum;
}

//Romans to Integers
function numberfy(romanStr) {
    var number = 0;
    var romans = [
        "M",
        "IM",
        "CM",
        "D",
        "XD",
        "CD",
        "C",
        "IC",
        "XC",
        "L",
        "IL",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    var numbers = [
        1000, 999, 900, 500, 490, 400, 100, 99, 90, 50, 49, 40, 10, 9, 5, 4, 1
    ];
    for (var i = 0; i < romanStr.length; i++) {
        var singleLetterPos = romans.indexOf(romanStr[i]);
        var twoLetterRoman = romanStr.slice(i, i + 2); // Like XL, IX, CD
        var twoLetterPos = romans.indexOf(twoLetterRoman); // It  gets the positions of them;
        if (singleLetterPos !== -1) {
            if (twoLetterPos !== -1) {
                number += numbers[twoLetterPos];
                i += 1;
            } else {
                number += numbers[singleLetterPos];
            }
        }
    }
    return number;
}

// is Parenthesis valid
function isValidParentheses(str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        var chr = str[i];

        if (chr === "(") {
            stack.push(chr);
        } else if (chr === ")") {
            var lastOpen = stack.pop();
            if (lastOpen === undefined) return false;
        }
    }
    return stack.length === 0;
}

// isValidBraces?

function isValidBraces(str) {
    var stack = [];
    var pairs = { "(": ")", "[": "]", "{": "}" };
    var closed = [")", "]", "}"];

    for (var i = 0; i < str.length; i++) {
        var chr = str[i];

        if (pairs[chr]) {
            stack.push(chr);
        } else if (closed.indexOf(chr) !== -1) {
            var lastOpen = stack.pop();
            if (pairs[lastOpen] !== chr) return false;
        }
    }
    return stack.length === 0;
}

// is Palindrome? /Strict version

function isStrictPalindrome(str) {
    var reversedStr = "";

    for (var i = 0; i < str.length; i++) {
        reversedStr = str[i] + reversedStr;
    }

    return reversedStr === str;
}

// isSoftPalindrome?

function isSoftPalindrome(str) {
    str = str.split(" ").join("").toLowerCase();
    var puncts = ["!", ",", "?", "."];
    var cleanStr = "";
    var reversedStr = "";

    for (var i = 0; i < str.length; i++) {
        var chr = str[i];
        if (puncts.indexOf(chr) === -1) {
            reversedStr = chr + reversedStr;
            cleanStr += chr;
        }
    }
    return reversedStr === cleanStr;
}

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
