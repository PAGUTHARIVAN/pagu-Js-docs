//JavaScript logical operators
//Logical operators are mainly used to perform the logical operations that determine the equality or difference between the values.
const a = true;
const b = false;
console.log(`AND operator (&&) = ${a && b}`);
console.log(`OR operator (||) = ${a || b}`);

let mat = 50;
let mat1 = 40;
let mat2 = 100;
let mat3 = 300;

console.log(mat > mat1 && mat2 < mat3); //because 50 (>) is greater than the 40, 100 (<) hundred is less than the 300; so answer is true
console.log(mat < mat1 && mat2 > mat3); //false because 50 is not lessthan the 40 so answer is false, another one is 100 is not greater than the 300 so the answer is false
console.log(mat > mat1 && mat2 > mat3); //true because mat is greater than the mat1

console.log(mat < mat1 || mat2 < mat3);

//Bitwise operators perform operations on binary representations of numbers

const res = 20 & 30;
const res1 = 24 | 35;
const res2 = 45 ^ 50;
const res3 = 54 << 10;
const res4 = 45 >> 5;

console.log(`Bitwise operators (& AND) = ${res}`);
console.log(`Bitwise operators (| OR) = ${res1}`);
console.log(`Bitwise operators (^ XOR) = ${res2}`);
console.log(`Bitwise operators (<< Left-Shift) = ${res3}`);
console.log(`Bitwise operators (>> Right-shift) = ${res4}`);

//Javascript functions
//A function is a block of code that performs a specific task. It can be defined once and called multiple times in a program.
//Resusability

function greet() {
    console.log("Hello, Pagu!");
}

greet(); //calling the function

function add() {
    console.log(5 + 10);
}
add(); //calling the function

function multi() {
    console.log(5 * 10);
}
multi(); //callin the function

function sub() {
    console.log(10 - 5);
}
sub(); //calling the function

function div() {
    console.log(10 / 5);
}
div(); //calling the function

function rem() {
    console.log(10 % 3); //remainder = 1
}

rem(); //calling the function

function pow() {
    console.log(2 ** 3); 
}
pow(); //calling the function

//Parameters and Arguments
//name, age -> Parameters

function intro(name, age) { //name and age are parameters
    console.log(`My name is ${name} and I am ${age} years old.`);
}
intro("Pagu", 20); //Pagu and 20 are arguments
intro("john", 25);
intro("jane", 30); //Resusability

//Retrun statement

function square(m,m) {
    return m ** m;
    console.log(10 + 10); //this will not be executed because it is after the return statement
}
let result = square(10,10);
console.log(result);

function cube(n) {
    return n++; //Increment operator after the variable and it is called postfix
}
let result1 = cube(5);
console.log(result1);

function cube1(x) {
    return ++x;
}

let result2 = cube1(10);
console.log(result2); //increment operator befor the variable and it is called prefix

function twins(hun) {
    return ++hun;
}

let result3 = twins(100);
console.log(result3);

function twins1(yy) {
    return ++yy;

}

console.log(twins1(200));
console.log(twins1(200));

//Default parameters
function geat(names = "friend") { //It is called default parameter
    console.log(`Hello, ${names}!`);
}

geat(); //It gives the default value "friend" because no argument is passed
geat("Pagu");
geat("Rockstar");
geat("John");

//1. Fucntion declaration

function say(nummmm) {
    return nummmm * nummmm;

}
console.log(say(5));

//2. Function Expression

const squa = function(nam) {
    return nam ** nam;
};
console.log(squa(10));

//3. Arrow Function

const squa11 = (nam1) => nam1 * nam1;
console.log(squa11(20)); //400


function paguF() {
    console.log("Hello pagu");
}

paguF(); //calling the function

function addd() {
    console.log(10 + 10 +10);
}
addd(); //calling the function

function mull() {
    console.log(1 * 1);
}

mull(); //calling the function

function loi(loan, interest) {
    return loan * interest;
}

let resultt = loi(1000, 0.05);
console.log(resultt);

//Email masker

function maskEmail(email) {
    const atIndex = email.indexOf("@");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const maskedMiddle = "*".repeat(username.length - 2);
    return firstChar + maskedMiddle + lastChar + domain;

}

const email = "freecodecamp@example.com";
console.log(maskEmail(email));

function hideMyEmail (myEmail) {
    const myEmailIdAt = myEmail.indexOf("@");
    const username1 = myEmail.slice(0, myEmailIdAt);
    const domain1 = myEmail.slice(myEmailIdAt);
    const firstChar1 = username1[0];
    const lastChar1 = username1[username1.length -1];
    const maskedMiddle1 = "*".repeat(username1.length -2);
    return firstChar1 + maskedMiddle1 + lastChar1 + domain1;

}

const myEmail = "pagutharivan2004@gmail.com";
console.log(hideMyEmail(myEmail));

function myEmailHide (email2) {
    const myEmailAtPlace = email2.indexOf("@");
    const myEmailIndex = email2.slice(0, myEmailAtPlace);
    const domain2 = email2.slice(myEmailAtPlace);
    const firstChar2 = myEmailIndex[0];
    const lastChar2 = myEmailIndex[myEmailIndex.length -1];
    const maskedMiddle2 = "*".repeat(myEmailIndex.length -2);
    return firstChar2 + maskedMiddle2 + lastChar2 + domain2;

}

const email2 = "paguart@gmail.com";
console.log(myEmailHide(email2));

