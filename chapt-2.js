//Three and Five , FizzBuzz
function threeAndFive() {
    var sum = 0;
    for(var i = 100; i <= 4000000; i ++){
        if((i % 5 === 0 || i % 3 === 0) && i % 15 !== 0){
            sum += i;
        }
    }
    return sum;
}


// Generate change;

function generateChange(cents) {
    var counter = { "one" : 0, "q" : 0, "d" : 0, "n" : 0, "p" : 0 };

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

// Messy Math Mashup
function messyMath(num) {
    var sum = 0;

    for(var i = 0; i <= num; i ++){
        if(!(i % 3 === 0) || i % 7 === 0){
            if(i % 7 === 0){
                sum += 2 * i;
            }
            else if (num / i === 3){
                return -1;
            }
            else {
                sum += i;
            }
        }
    }
    return sum;
}
//

//Fibonacci

function fibonacci(size) {
    var fibSeq = [0, 1];
    var next = 1;
    while (fibSeq.length < size) {
        fibSeq.push(next);
        next = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2];
    }
    return fibSeq;
}

// sum to one digit
function sumToOne(number) {
    while(true){
        number = sumOfDigitts(number);
        if (number < 10) {
            return number;
        }
    }
}

function sumOfDigitts(number) {
    var sum = 0;
    var digits = number.toString();

    for(var i = 0; i < digits.length; i++){
        sum += parseInt(digits[i]);
    }

    return sum;
}

// is Prime?
function isPrime(number) {
    if (number < 2){
        return false;
    }

    for(var i = 2; i < number; i ++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
//Clock Hand Angles
function clockHandAngles(seconds) {
    var hoursAng = ((seconds/3600) % 12) * 30;
    var minutesAng = ((seconds % 3600) / 60 ) * 6;
    var secondsAng = (seconds % 60) * 6;

    return [hoursAng, minutesAng, secondsAng];
}


// Sweat Shirt Pricing

function sweatShirtPricing(num) {
    if(num === 1){
        var discount = 0;
    }else if (num === 2) {
        var discount = 0.09;
    } else if (num  === 3) {
        var discount = 0.19;
    }
    else {
        var discount = 0.35;
    }

    return Math.ceil(num * 20 - (num * 20 * discount));
}

// Extract-o-matic

function extractDigit(num, digitNum) {
    if(digitNum === 0){
        var divider = 1;
    }
    else if (digitNum === 1 || digitNum === -1) {
        var divider = 10;
    }
    else if (digitNum === 2 || digitNum === -2) {
        var divider = 100;
    }
    else if (digitNum > 2){
        return 0;
    }

    if(num > 0){
        return Math.floor(num / divider) % 10;
    }
    else {
        return Math.abs(Math.ceil(num / divider) % 10);
    }
}



// ===================  Gaming Fundamentals ======================//

function rollOne(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollMany(times, min, max) {
    var values = [];

    for(var i = 0; i < times; i ++){
        values.push(rollOne(min, max))
    }
    return values;
}
function maxValMinVal(times, min, max) {
    var values = rollMany(times, min, max);
    var maxVal = values[0];
    var minVal = values[0];

    for(var i = 0; i < values.length; i ++){
        if (maxVal < values[i]) {
            maxVal = values[i];
        }

        if (minVal > values[i]) {
            minVal = values[i];
        }
    }
    return [minVal, maxVal];
}

function sumOfRolls(times, min, max) {
    var values = rollMany(times, min, max);
    var sum = 0;

    for(var i = 0; i < values.length; i ++){
        sum += values[i];
    }

    return sum;
}

function average(times, min, max) {
    var sum = sumOfRolls(times, min, max);
    return Math.round(sum / times);
}
