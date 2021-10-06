// biggieSize
const biggieSize = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

// printLow Return highest

const printLowReturnHigh = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (let ele of arr) {
        if (min > ele) {
            min = ele;
        }

        if (max < ele) {
            max = ele;
        }
    }
    console.log(min);
    return max;
};

// first odd number
const firstOdd = (numbers) => {
    for (let num of numbers) {
        if (num % 2 !== 0) {
            return num;
        }
    }
    return "No odd found";
};

//Double Vision

const doubleArr = (numbers) => {
    return numbers.map((num) => num * 2);
};

// countPositives

const countPositives = (nums) => {
    count = 0;

    for (let num of nums) {
        if (num > 0) count++;
    }
    return count;
};

const countPositives1 = (nums) => {
    return nums.reduce((acc, num) => {
        return num > 0 ? acc + 1 : acc;
    }, 0);
};

// Evens and Odds

const evenAndOdds = (nums) => {
    let i = 0;

    while (i < nums.length - 2) {
        let first = nums[i],
            second = nums[i + 1],
            third = nums[i + 2];
        if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0) {
            console.log([first, second, third], "Odds");
            i += 3;
            continue;
        } else if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
            console.log([first, second, third], "Evens");
            i += 3;
            continue;
        }
        i++;
    }
};

// Increment the seconds

const incrementSeconds = (arr) => {
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
    }
    return arr;
};

//Previous length

const previousLength = (words) => {
    let prev = words[0];
    for (let i = 1; i < words.length; i++) {
        let temp = words[i];
        words[i] = prev.length;
        prev = temp;
    }
    return words;
};
// Add seven to Most

const addSeventoMost = (arr) => {
    var plusSeven = [];

    for (let i = 1; i < arr.length; i++) {
        plusSeven.push(arr[i] + 7);
    }
    return plusSeven;
};

// Reverse array in place

const reverseArrInPlace = (arr) => {
    let mid = arr.length / 2;

    for (let i = 0; i < mid; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
};

// Negativate array

const negativate = (numbers) => {
    let allNegatives = [];

    for (let num of numbers) {
        if (num > 0) {
            let negative = num - 2 * num;
            allNegatives.push(negative);
        } else {
            allNegatives.push(num);
        }
    }
    return allNegatives;
};

// Hungry elements

const hungryArray = (foods) => {
    let found = false;
    for (let food of foods) {
        if (food === "food") {
            found = true;
            console.log("yummy");
        }
    }
    if (!found) {
        return "I'm hungry";
    }
};

// Swap toward the Center

const swapTowardCenter = (arr) => {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    [arr[2], arr[arr.length - 3]] = [arr[arr.length - 3], arr[2]];

    /* Old way
    let temp1 = arr[0];
    let temp2 = arr[2];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp1;

    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2; */

    return arr;
};

//Scale the array

const scaleArray = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }

    return arr;
};

// keep the last n

const keepTheLastN = (arr, n) => {
    let sliceIdx = arr.length - n;
    return arr.slice(sliceIdx);
};

// Soaring IQ

function soaringIQ(startIQ) {
    var sumIQ = 0;
    for (var i = 0.01; i <= 0.98; i += 0.01) {
        sumIQ += i;
    }
    return sumIQ + startIQ;
}

// Math Help

const findX = (M, B) => {
    // Y = MX + B; Y = 0. Given M and B, find X.
    let X = -B / M;
    return X;
};

// Soaring IQ

const getFinalIQ = (startIQ) => {
    // Everyday it increments by 0.01 points. Total days 98. So on the 98th it will incrememt by 0.98.
    // There is formula n * (n + 1) / 2. it works only for n >=1
    // To get benefit from this formula, we initially multiply 0.01, 0.02, ...0.98 by 100.

    let gainedIQ = (98 * 99) / 2 / 100;
    return gainedIQ + startIQ;
};

// Letter Grade

const letterGrade = (num) => {
    let sign = "";
    let info = "Score: " + num + ". Grade: ";
    if (
        num >= 99 ||
        (num >= 88 && num <= 89) ||
        (num >= 78 && num <= 79) ||
        (num >= 68 && num <= 69)
    ) {
        sign = "+";
    } else if (
        (num <= 81 && num >= 80) ||
        (num <= 71 && num >= 70) ||
        (num <= 61 && num >= 60)
    ) {
        sign = "-";
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
};
