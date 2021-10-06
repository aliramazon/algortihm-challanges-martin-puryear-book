// biggieSize
function biggieSize(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

// printLow Return highest

function printLowReturnHigh(arr) {
    var min = arr[0];
    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }

        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

// printOneReturnAnother
function firstOdd(numbers) {
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            return numbers[i];
        }
    }
    return "No odd found";
}

//Double Vision

function doubleArr(numbers) {
    var doubled = [];

    for (var i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
}

// CountPositives

function CountPositives(arr) {
    count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

// Evens and Odds

function evensAndOdds(arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        var first = arr[i],
            second = arr[i + 1],
            third = arr[i + 2];
        if (first % 2 !== 0 && (second % 2 !== 0) & (third % 2 !== 0)) {
            console.log("That's odd!");
        } else if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
            console.log("Even more so!");
        }
    }
}

// Increment the seconds
function incrementSeconds(arr) {
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
    }
    return arr;
}

//Previous lengts

function previousLength(words) {
    var prev = words[0];
    for (var i = 1; i < words.length; i++) {
        var temp = words[i];
        words[i] = prev.length;
        prev = temp;
    }
    return words;
}
// Add seven to Most

function addSeventoMost(arr) {
    var plusSeven = [];

    for (var i = 1; i < arr.length; i++) {
        plusSeven.push(arr[i] + 7);
    }
    return plusSeven;
}

// Reverse array in place

function reverseArrInPlace(arr) {
    // var size = arr.length / 2;
    var size = arr.length / 2 - 1;

    for (var i = 0; i < size; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// Negativate array

function negativate(numbers) {
    var allNegatives = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            negative = numbers[i] - 2 * numbers[i];
            allNegatives.push(negative);
        } else {
            allNegatives.push(numbers[i]);
        }
    }
    return allNegatives;
}

// Hungry elements

function hungryArray(foods) {
    for (var i = 0; i < foods.length; i++) {
        if (foods[i] === "food") {
            return true;
        }
    }
    return false;
}

// Swap toward the Center

function swapTowardCenter(arr) {
    var temp1 = arr[0];
    var temp2 = arr[2];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp1;

    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2;

    return arr;
}

//Scale the array

function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }

    return arr;
}

// keep the last n

function keepTheLastN(arr, n) {
    var slice_idx = arr.length - n;
    return arr.slice(slice_idx);
}

// Soaring IQ

function soaringIQ(startIQ) {
    var sumIQ = 0;
    for (var i = 0.01; i <= 0.98; i += 0.01) {
        sumIQ += i;
    }
    return sumIQ + startIQ;
}

// Letter Grade

function letterGrade(num) {
    var info = "Score: " + num + ". Grade: ";
    if (num >= 88 || (num >= 78 && num <= 79) || (num >= 68 && num <= 69)) {
        var sign = "+";
    } else if (
        num <= 81 ||
        (num <= 71 && num >= 70) ||
        (num <= 61 && num >= 60)
    ) {
        var sign = "-";
    } else {
        var sign = "";
    }
    if (num >= 90) {
        console.log(info + "A" + sign);
    } else if (num >= 80) {
        console.log(info + "B" + sign);
    } else if (num >= 70) {
        console.log(info + "C" + sign);
    } else if (num >= 60) {
        console.log(info + "D" + sign);
    } else {
        console.log("Retake your exam");
    }
}
