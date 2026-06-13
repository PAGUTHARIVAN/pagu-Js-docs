function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(4));
console.log(add5(10));
console.log(add10(10));


function makeMinus(x) {
    return function(y) {
        return x - y;
    }
}

let minus1 = makeMinus(20);
console.log(minus1(1));
console.log(minus1(5));
console.log(minus1(19));

//Example 2 greet function
const createGreeter = (greetingWord) => {
    return function(name) {
        return `${greetingWord}, ${name}`;
    };
}

let sayVanakam = createGreeter("Vanakkam");
let sayHello = createGreeter("Hello");

console.log(sayVanakam("Nanba"));
console.log(sayHello("Bro"));
console.log(sayVanakam("Nanba, Eppadi Irukka ?"));
console.log(sayHello("Hello bro how are you ?"));

//Example 3 Number counter
function createCounter() {
    let count = 0;
    return function() {
        count = count + 1;
        return count;
    }
}

let clickCounter = createCounter();
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());

//Tax caclculator
function createTaxCalculator(taxPercentage) {
    return function(amount) {
        return amount + (amount * (taxPercentage / 100));
    };
}

let calculateFoodTax = createTaxCalculator(5);
let calculateElectronicsTax = createTaxCalculator(18);

console.log(calculateFoodTax(100));
console.log(calculateElectronicsTax(100));

function createLogger(logLevel) {
    return function(message) {
        console.log(`[${logLevel}] - ${message}`);
    };
}
let infoLog = createLogger("INFO");
let errorLog = createLogger("ERROR");

infoLog("Server started successfully.");
errorLog("Database connection failed!");

function applyDiscount(discountAmount) {
    return function(price) {
        return price - discountAmount;
    }
}

let flat500ff = applyDiscount(50);
let flat1000ff = applyDiscount(100);

console.log(flat500ff(500));
console.log(flat1000ff(500));

function createLengthValidator(maxlength) {
    return function(text) {
        return text.length <= maxlength;
    };
}

let isPasswordValid = createLengthValidator(8);
let isUsernameValid = createLengthValidator(15);

console.log(isPasswordValid("secret"));
console.log(isPasswordValid("supersecretpassword"));

