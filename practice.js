function hideTheEmail(email) {
    const emailAtIndex = email.indexOf("@");
    const emailName = email.slice(0, emailAtIndex);
    const emailDomain = email.slice(emailAtIndex);
    const hiddenEmailName = "*".repeat(emailName.length - 2);
    const firstLetter = emailName[0];
    const lastLetter = emailName[emailName.length -1];
    return firstLetter + hiddenEmailName + lastLetter + emailDomain;
    
}

const email = "pagutharivan@gmail.com";
console.log(hideTheEmail(email));

//card counting
let count = 0; //global variable

function cardCounter(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";

    } else {
        return count + " Hold";
    }
}

console.log(cardCounter(2));
console.log(cardCounter(3));

//leap year - checker
function isLeapYear(year) {
    if(year % 400 === 0) {
        return `${year} is a leap year.`;
    } else if(year % 100 === 0) {
        return `${year} is not a leap year.`;
    } else if (year % 4 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

let year = 2000; //leap year 1900 is not a leap year.
let result = isLeapYear(year);
console.log(result);

function isLeapYears(years) {
    if(years % 400 === 0) {
        return `${years} is a leap year.`;
    } else if (years % 100 === 0) {
        return `${years} is not a leap year.`;

    } else if (years % 4 === 0) {
        return `${years} is a leap year.`;
    } else { 
        return `${years} is not a leap year.`;
    }

}

let years = 2000;
let result2 = isLeapYears(years);
console.log(result2);

//
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0,num) + "...";
    } else {
        return str;
    }
}

let str = "hello world";
let num = 5;
console.log(truncateString(str, num));

let age = 17;
let experience = 5;
if (age >= 18 || experience >= 4) {
    console.log("How are your?");
} else {
    console.log("Go and study hard");
}

//operators
/* Operators are for Mathematical and Logical computation
The Assignment Operator = assigns values
The Addition Operator + adds values
The Multiplication Operator * multiplies values
The Comparison Operator > compares values */

//JavaScript Addition
//The Addition Operator (+) adds numbers:
let x = 5;
let y = 10;
let z = x + y;
console.log(`The sum of ${x} and ${y} is = ${z}`);

//JavaScript Multiplication
let a = 10;
let c = 10;
let multi = a * c;
console.log(`The multiplication of ${a} and ${c} is = ${multi}`);

//JavaScirpt Subtraction
let m = 20;
let n = 14;
let sub = m - n;
console.log(`The subtraction of ${m} and ${n} is = ${sub}`);

//JavaScript Division
let p = 20;
let q = 5;
let div = p / q;
console.log(`The division of ${p} and ${q} is = ${div}`);

//JavaScript Modulus
let r = 50;
let s = 3;
let mod = r % s;
console.log(`The modulus of ${r} and ${s} is = ${mod}`);

//JavaScript Exponentiation
let t = 100;
let u = 2;
let exp = t ** u;
console.log(`The exponentiation of ${t} and ${u} is = ${exp}`);

//JavaScript Increment
let incpost = 10;
let incpre = 10;
console.log(incpost++);
console.log(incpost++); //postfix increment
console.log(++incpre); //prefix increment

let decpost = 10;
let decpre = 10;
console.log(decpost--);
console.log(decpost--);
console.log(--decpre); //prefix decrement

//JavaScript Comparison Operators
let equal = !true === false;
console.log(equal);

//JavaScript Conditionals
//The if Statement
//Use if to specify a code block to be executed, if a specified condition is true.
/* if (condition) {
}    */
//The else Statemetn 
//Use else to specify a code block to be executed, if the same condition is false.
/*
if (condition) {
 //code to execute if the condition is true
} else {
    //code to execute if the condition is false}
}

The swithc statement

switch (expression) {
case x:
    //code block
}
*/
