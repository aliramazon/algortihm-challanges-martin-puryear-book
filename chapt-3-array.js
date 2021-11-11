/* This Chapter focuses on Arrays */

// Push the value to front. Use just push method.
const unshift = (arr, num) => {
    arr.push(num);
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr.length;
};

// Insert At. pos <= arr.length
const insertAt = (arr, pos, val) => {
    arr.push(val);
    for (let i = arr.length - 1; i > pos; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

// Remove from the front. Use just pop method;
const shift = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    return arr.pop();
};

//  Remove At
const removeAt = (arr, pos) => {
    for (let i = pos; i < arr.length - 1; i++) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr.pop();
};

// Swap Pairs
const swapPairs = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    return arr;
};

// Remove Duplicates;
const removeDuplicates = (arr) => {
    let hash = {};
    let uniques = [];

    for (let ele of arr) {
        if (!hash[ele]) {
            hash[ele] = true;
            uniques.push(ele);
        }
    }
    return uniques;
};

// Get position of min element of array
const getMinPos = (arr) => {
    let minPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[minPos] > arr[i]) {
            minPos = i;
        }
    }
    return minPos;
};

// Move min value to front
const minToFront = (arr) => {
    let minPos = getMinPos(arr);
    for (let i = minPos; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

// Reverse Array in-place
const reverseArr = (arr) => {
    let mid = Math.floor(arr.length / 2);

    for (let i = 0; i < mid; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
};

// Rotate Array
const rotateArrInPlace = (arr, shiftBy) => {
    let hash = {},
        newIndex;

    for (let i = 0; i < arr.length; i++) {
        newIndex = (i + shiftBy) % arr.length;
        hash[newIndex] = arr[newIndex];

        if (hash[i] || hash[i] === 0) {
            arr[newIndex] = hash[i];
        } else {
            arr[newIndex] = arr[i];
        }
    }

    return arr;
};

const rotateArr = (arr, shiftBy) => {
    let rotated = [];
    let newIndex;

    for (let i = 0; i < arr.length; i++) {
        newIndex = (i + shiftBy) % arr.length;
        rotated[newIndex] = arr[i];
    }
    return rotated;
};

// Concat two arrays;
const concatTwoArrays = (arr1, arr2) => {
    let concatedArr = [];

    for (let ele of arr1) {
        concatedArr.push(ele);
    }

    for (let ele of arr2) {
        concatedArr.push(ele);
    }
    return concatedArr;
};

// Filter Range // Remove Range;
const filterRange = (arr, min, max) => {
    let i = 0;
    let ele;

    while (i < arr.length) {
        ele = arr[i];
        if (ele < min || ele > max) {
            removeAt(arr, i);
        } else {
            i++;
        }
    }
    return arr;
};

// Remove Negatives
function removeNegtives(arr) {
    let i = 0;
    let ele;

    while (i < arr.length) {
        ele = arr[i];
        if (ele < 0) {
            removeAt(arr, i);
        } else {
            i++;
        }
    }
    return arr;
}

// Second to Last
const secondToLast = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
};

// nth to Last;
const nthToLast = (arr, n) => {
    if (n > arr.length) {
        return null;
    }
    return arr[arr.length - n];
};

// isValidCreditCardNumber
const isValidCreditCardNumber = (nums) => {
    let sum = nums[nums.length - 1];
    let product;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i % 2 !== 0) {
            product = nums[i] * 2;
            if (product > 9) product -= 9;
            sum += product;
        } else {
            sum += nums[i];
        }
    }
    return sum % 10 === 0;
};

// Shuffle Array;
const shuffleArray = (array) => {
    let randomIndex;

    for (let i = 0; i < array.length; i++) {
        randomIndex = Math.floor(Math.random() * array.length);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
};

// Intermediate Sums
const intermediateSums = (arr, nth) => {
    let sum = 0;
    let nthCounter = 0;
    let i = 0;

    while (i < arr.length) {
        sum += arr[i];
        nthCounter += 1;

        if (nthCounter % nth === 0 || i === arr.length - 1) {
            insertAt(arr, i + 1, sum);
            sum = 0;
            i += 2;
        } else {
            i += 1;
        }
    }

    return arr;
};

// Double Trouble
const doubleTrouble = (arr) => {
    let i = 0;

    while (i < arr.length) {
        insertAt(arr, i, arr[i]);
        i += 2;
    }

    return arr;
};

// Zip it, by creating a new array;
const zipIt = (arr1, arr2) => {
    let zippedArr = [];
    let i = 0,
        j = 0;

    while (zippedArr.length < arr1.length + arr2.length) {
        if (i < arr1.length && j < arr2.length) {
            zippedArr.push(arr1[i], arr2[j]);
            i++;
            j++;
        } else if (i < arr1.length && j >= arr2.length) {
            zippedArr.push(arr1[i]);
            i++;
        } else {
            zippedArr.push(arr2[j]);
            j++;
        }
    }
    return zippedArr;
};

// Zip it by mutating first array
const zipItInplace = (arr1, arr2) => {
    let pos = arr1.length === 0 ? -1 : 0;
    for (let i = 0; i < arr2.length; i++) {
        insertAt(arr1, pos + 1, arr2[i]);
        if (pos + 1 === arr1.length - 1) {
            pos += 1;
        } else {
            pos += 2;
        }
    }

    return arr1;
};
