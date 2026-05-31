//Data type checker//
function dataTypeChecker(value) {
    if(value === null) {
        return "This is null not object";
    }

    else if (typeof(value) === typeof(value)) {
        return `It is ${typeof(value)}`;
    } 
     else {
        return "Nothing";
    }
};

console.log(dataTypeChecker());

const dTypeChecker = (value) => {
    if (value === null) {
        return "This is null not object";
    } else if(Array.isArray(value)) {
        return "It is an Array";
    } else {
        return `It is ${typeof value} Data type!`;
    }
};

console.log(dTypeChecker([1, 2, 3]));

//JavaScript operators revision

//1. Javascript Arithmetic operators
const sum = 5 + 2;
console.log(sum);
const sub = 5 - 2;
console.log(sub);
const div = 5 / 2;
console.log(div);
const mul = 5 * 2;
console.log(mul);
const mod = 5 % 2;
console.log(mod);
const exp = 5 ** 2;
console.log(exp);


function eat(value) {
    if (value === 5) {
        return value + 5;
    } else {
        return "I want 5 to eat and grow.."
    }
};

console.log(eat(5));

//JavaScript AssignMent operators
//Assignment operators are used to assign values to variable they can also perform operation like addition or multiplication while assigning the value
let num = 100;
num *= 5; //<- this called assignment operators in JavaScript
console.log(num);

num += 100;
console.log(num);

num -= 500;
console.log(num);

//JavaScript Comparison Operators
//Comparison operator compare two values and return a boolean (true or false)

console.log(1 !== '1');

console.log(10 > 5 && 8 < 10 && 10 == 9);
console.log(10 < 5 || 1 > 5 || 10 == 10);

console.log(!true);

//Ternary operators
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

const eq = 10;
const cheq = eq !== 9 ? "Yes Ten is not equalt to 9" : "Yes Ten is equal to nine";
console.log(cheq);

let lo = 10;
console.log(-lo);

function weather(degree) {
    switch (degree) {
    case 0:
        return `Its very cold Day!`;
        break;
    case 10:
        return `Its also a cold day but better than before!`;
        break;
    case 20:
        return `It's a chill day!`;
        break;
    case 30:
        return "Weather is good!";
        break;
    case 40:
        return "Weather is too hot!";
        break;
}
};

console.log(weather(10));


