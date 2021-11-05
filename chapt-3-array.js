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

console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray([1, 2, 3, 4, 5]));

// Intermediate Sums

function intermediateSums(array, n) {
    var sum = 0;
    var idxCouter = 0;

    for (var i = 0; i < array.length; i++) {
        idxCouter += 1;
        if (idxCouter % n !== 0 && i !== array.length - 1) {
            sum += array[i];
        } else {
            sum += array[i];
            array = insertAt(array, i + 1, sum); //insertAt function could be found on the top of the page
            sum = 0;
            idxCouter = 0;
            i += 1;
        }
    }
    return array;
}

// Double Trouble
function twinifyElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr = insertAt(arr, i + 1, arr[i]); // //insertAt function could be found on the top of the page
        i += 1;
    }
    return arr;
}

// Zip it, by creating a new array;

function zipIt(arr, arr1) {
    var limit = arr.length;
    if (arr.length >= arr1.length) {
        limit = arr1.length;
    }

    var zipped = [];
    for (var i = 0; i < limit; i++) {
        zipped.push(arr[i], arr1[i]);
    }

    var size = zipped.length / 2;

    if (size === arr.length && size === arr1.length) {
        return zipped;
    } else if (size === arr.length) {
        for (var i = size; i < arr1.length; i++) {
            zipped.push(arr1[i]);
        }
    } else {
        for (var i = size; i < arr.length; i++) {
            zipped.push(arr[i]);
        }
    }
    return zipped;
}

//f Zip it by mutating first array

function zipIt1(arr, arr1) {
    var limit = arr.length;
    if (arr.length > arr1.length) {
        limit = arr1.length;
    }
    var inserIdx = 1;
    for (var i = 0; i < limit; i++) {
        arr = insertAt(arr, inserIdx, arr1[i]);
        inserIdx += 2;
    }

    if (limit === arr.length / 2) {
        for (var i = limit; i < arr1.length; i++) {
            arr.push(arr1[i]);
        }
    }
    return arr;
}
