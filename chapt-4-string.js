function removeAt(words, pos) {
    if (pos > words.length-1) {
        return "Not Valid Position";
    }
    var temp;
    for(var i = pos; i < words.length-1; i ++){
        temp = words[i];
        words[i] = words[i + 1];
        words[i + 1] = temp;
    }
    words.pop();
    return words;
}

// Remove Blanks
function removeBlanks(str) {
    return str.split(" ").join("");
}

//  Get Digits

function getDigits(str) {
    var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var numberfy = "";

    for(var i = 0; i < str.length; i ++){
        if(digits.indexOf(parseInt(str[i])) !== -1){
            numberfy += str[i];
        }
    }
    return parseInt(numberfy); // parseInt() takes str-interger as argument and converts to Integer
}


// Acronyms

function firstLettersOnly(str) {
    var words = str.split(" ");
    var capitals = "";

    for(var i = 0; i < words.length; i ++){
        if(words[i] !== ""){
            capitals += words[i][0].toUpperCase();
        }
    }
    return capitals;
}

// countNonSpaces

function countNonSpaces(str) {
    var words = str.split(" ");
    return words.join("").length;
}


// Remove Shorters

function removeShorters(words, size) {
    for(var i = 0; i < words.length; i ++){
        if(words[i].length < size){
            removeAt(words, i); // Helper function on the top of page;
        }
        i-= 1;
    }
    return words;
}



// Reverse String in Place
function reverseStr(string) {
    string = string.split("");
    var size = Math.floor(string.length/2);
    var temp;
    for(var i = 0; i < size; i ++){
        temp = string[i];
        string[i] = string[string.length - 1 - i];
        string[string.length - 1 - i] = temp;
    }
    return string.join("");
}


// Remove Even-length strings

function removerEvenLengths(words) {
    for(var i = 0; i < words.length; i ++){
        if(words[i].length % 2 === 0){
            removeAt(words, i);
            i -= 1;
        }
    }
    return words;
}


// Integers to Roman Numerals//

//This challenge is confusing. You must specify 349 as CCCIL, but as real It must be CCCXLIX according to
//http://www.rapidtables.com/convert/number/roman-numerals-converter.htm. However, they both represent same number.
function romanify(number) {
    var romanNum = "";
    var romans = ["M", "IM", "CM", "D", "XD", "CD", "C", "IC", "XC", "L", "IL" , "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 999, 900, 500,490, 400, 100, 99, 90, 50, 49, 40, 10, 9, 5, 4, 1];

    for(var i = 0; i < numbers.length; i ++){
        while(number >= numbers[i]){
            number -= numbers[i];
            romanNum += romans[i];
        }
    }
    return romanNum;
}

//Romans to Integers
function numberfy(romanStr) {
    var number = 0;
    var romans = ["M", "IM", "CM", "D", "XD", "CD", "C", "IC", "XC", "L", "IL" , "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 999, 900, 500,490, 400, 100, 99, 90, 50, 49, 40, 10, 9, 5, 4, 1];
    for(var i = 0; i < romanStr.length; i ++){
        var singleLetterPos = romans.indexOf(romanStr[i]);
        var twoLetterRoman = romanStr.slice(i, i +2); // Like XL, IX, CD
        var twoLetterPos = romans.indexOf(twoLetterRoman); // It  gets the positions of them;
        if(singleLetterPos !== -1){
            if(twoLetterPos !== -1){
                number += numbers[twoLetterPos];
                i += 1;
            }
            else {
                number += numbers[singleLetterPos];
            }
        }
    }
    return number;
}


// is Parenthesis valid
function isValidParentheses(str) {
    var stack = [];
    for(var i = 0; i < str.length; i ++){
        var chr = str[i];

        if(chr === "("){
            stack.push(chr);
        }
        else if (chr === ")") {
            var lastOpen = stack.pop();
            if(lastOpen === undefined) return false;
        }
    }
    return stack.length === 0;
}


// isValidBraces?

function isValidBraces(str) {
    var stack = [];
    var pairs = {"(" : ")", "[" : "]", "{" : "}"};
    var closed = [")", "]", "}"];

    for(var i = 0; i < str.length; i ++){
        var chr = str[i];

        if(pairs[chr]){
            stack.push(chr);
        }
        else if (closed.indexOf(chr) !== -1) {
            var lastOpen = stack.pop();
            if(pairs[lastOpen] !== chr) return false;
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

    for(var i = 0; i < str.length; i ++){
        var chr = str[i];
        if(puncts.indexOf(chr) === -1){
            reversedStr = chr + reversedStr;
            cleanStr += chr;
        }
    }
    return reversedStr === cleanStr;
}
