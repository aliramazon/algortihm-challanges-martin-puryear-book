//Three and Five , FizzBuzz
const threeAndFive = () => {
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 5 === 0 || i % 3 === 0) && i % 15 !== 0) {
            sum += i;
        }
    }
    return sum;
};

// Generate change;

const generateChange = (cents) => {
    let counter = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

    while (cents >= 25) {
        cents -= 25;
        counter["quarters"] += 1;
    }
    while (cents >= 10) {
        cents -= 10;
        counter["dimes"] += 1;
    }
    while (cents >= 5) {
        cents -= 5;
        counter["nickels"] += 1;
    }
    while (cents >= 1) {
        cents -= 1;
        counter["pennies"] += 1;
    }
    return counter;
};

// Messy Math Mashup
const messyMath = (num) => {
    let nums = [];
    let sum = 0;
    if (num % 3 === 0) return -1;

    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0) {
            continue;
        } else if (i % 7 === 0) {
            nums.push(2 * i);
            sum += 2 * i;
        } else {
            sum += i;
            nums.push(i);
        }
    }
    return [nums, sum];
};

//Fibonacci

const fibonacci = (size) => {
    let fibSeq = [0, 1];
    let next = 1;
    while (fibSeq.length < size) {
        fibSeq.push(next);
        next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    }
    return fibSeq;
};

// sum to one digit
const sumToOne = (number) => {
    if (num < 0) return "Only positive integers allowed";
    while (true) {
        number = sumOfDigitts(number);
        if (number < 10) {
            return number;
        }
    }
};

const sumOfDigitts = (number) => {
    let sum = 0;
    let digits = number.toString();

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    return sum;
};

const sumToOneRecursion = (number) => {
    const sumUpDigits = (num) => {
        let sum = 0;
        if (num < 10) {
            return num;
        } else {
            while (num > 0) {
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            return sumUpDigits(sum);
        }
    };

    return sumUpDigits(number);
};

// Check if number is prime. We need to loop upto sqrt(number) as if number is devisible by number bigger than its square root, it is devisible by number less than square root
const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

//Clock Hand Angles
const clockHandAngles = (seconds) => {
    let hoursAng = ((seconds / 3600) % 12) * 30; // 1 hour is 30 deg
    let minutesAng = ((seconds / 60) % 60) * 6; // 1 minut is 6 deg
    let secondsAng = (seconds % 60) * 6; // 1 second is 6 deg

    return [hoursAng, minutesAng, secondsAng];
};

// Sweat Shirt Pricing
const sweatShirtPricing = (num) => {
    let discount = 0;

    if (num === 2) {
        discount = 0.09;
    } else if (num === 3) {
        discount = 0.19;
    } else if (num >= 4) {
        discount = 0.35;
    }

    return Math.ceil(num * 20 - num * 20 * discount);
};

// Clock Hand Angles Rounded
const clockHandAnglesRounded = (seconds) => {
    let hoursAng = ((seconds / 3600) % 12) * 30; // 1 hour is 30 deg
    let minutesAng = ((seconds / 60) % 60) * 6; // 1 minut is 6 deg
    let secondsAng = (seconds % 60) * 6; // 1 second is 6 deg

    return [
        Math.floor(hoursAng),
        Math.floor(minutesAng),
        Math.floor(secondsAng)
    ];
};

// Extract-o-matic

const extractDigit = (num, digitNum) => {
    num = Math.abs(num);
    let nthDigit = digitNum >= 0 ? 10 ** digitNum : 10 ** Math.abs(digitNum);

    if (digitNum >= 0) {
        return Math.floor(num / nthDigit) % 10;
    }

    return Math.floor(num * nthDigit) % 10;
};

// Most significant digit. Leftmost non-zero digit

const mostSignificantDigit = (number) => {
    number = Math.abs(number);

    if (number > 1) {
        while (number >= 10) {
            number = number / 10;
        }
    } else {
        while (number < 1) {
            number *= 10;
        }
    }
    return Math.floor(number);
};

// Gaming Fundamentals
const rollOne = () => {
    return Math.ceil(Math.random() * 6);
};

const playFives = (num) => {
    for (let i = 0; i < num; i++) {
        let result = rollOne();
        console.log(result);
        if (result === 5) {
            console.log("That is good luck");
        }
    }
};

const playStatistics = (num) => {
    let min = null;
    let max = null;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        let result = rollOne();
        sum += result;
        if (min === null) {
            min = result;
        }
        if (max === null) {
            max = result;
        }

        if (min > result) min = result;
        if (max < result) max = result;
    }

    return {
        min,
        max,
        sum,
        average: sum / num
    };
};

// Statistics Untill Doubles

const rollOne20 = () => {
    return Math.ceil(Math.random() * 20);
};

const statisticsUntilDoubles = () => {
    let current = rollOne20();
    let next = rollOne20();
    let rolls = 2;
    let sum = current + next;
    let min = current;
    let max = next;

    while (current !== next) {
        let result = rollOne20();
        rolls++;
        sum += result;
        if (min > result) min = result;
        if (max < result) max = result;
        current = next;
        next = result;
    }

    return {
        min,
        max,
        rolls,
        sum,
        average: sum / rolls,
        current,
        next
    };
};

console.log(statisticsUntilDoubles());
