//Data Types in JavaScript
//Primitive datatypes and Non-Primitive datatypes
//Primitive datatypes:
//1. Numeric types :-
// * Number
// * bigInt
//2. Non-Numeric types:-
// * String
// * boolean
// * undefined
// * null
// * symbol

//Non-Primitve datatypes
// 1. Arrays
// 2. Objects
// 3. Functions
// 4. Regular expression
// 5. Date object

let nums = 5 > 3 > 2;
console.log(nums);

let nums2 = (5 > 3) && (3 > 2);
console.log(nums2);


console.log([] === []); //Since [] and [] are different instances in memory, ther result is false.

console.log("10" < "9"); //When JavaScript compares strings, it compares their Unicode values lexicographically (character by character).
// "10" is compared to "9". Since "1" has a lower Unicode value than "9". JavaScript detemines that "10" is less than "9".
//This comparison might seem counterintutiv, but it's due to JavaScript's string comparison mechanism.

console.log(NaN === NaN);
//In JavaScript, NaN (Not-a-Number) is a special value that represents an ivalid number or the result of an operaion that cannot produce a valid number.
// One of the most unusual aspects of NaN is that it is not equal to itself. This behavior exiests due to the design of the IEEE 754 standard, which JavaScript follows for floating-point arithmetic.
// As a result, NaN === NaN returns false.

let nans = 0 / 0;
console.log(Number.isNaN(nans)); //ttrue

let res = "" / 0;
console.log(Number.isNaN(res)); //NaN

console.log(undefined > 0); //When JavaScript attempts to compare undefined with 0, it converts undefined to NaN (not-a-Number). Any comparison involving NaN returns false.
//undefined > 0 becomes NaN . 0, which evaluates to false.

console.log(Infinity > 1000);
//In JavaScript, infinity represents an unbounded, positive number. it's greater than any finite number, including 1000.
//Therefore infinity > 1000 evaluates to true.

//JavaScript Arithmetic Operators
//Arithmetic operators perform mathematical calculations like additionm subtraction, multiplication etc.
const sum = 5 + 3;
console.log(`Arithmetic operators: Addition (+) = ${sum}`);
const sum1 = 5 - 3;
console.log(`Arithmetic operators: Subtraction (-) = ${sum1}`);
const sum2 = 5 / 3;
console.log(`Arithmetic operators: Division (/) = ${Math.floor(sum2)}`);
const sum3 = 5 * 3;
console.log(`Arithmetic operators: Mulitiplication (*) = ${sum3}`);
const sum4 = 5 % 3;
console.log(`Arithmetic operators: Remainder (%) = ${sum4}`);
const sum5 = 5 ** 3;
console.log(`Arithmetic operators: Exponentiation (**) = ${sum5}`);

//Assignment operators
//Assignment operators are used to assign values to variables they can also perform operations like addition or multiplication while assigning the value.
let hello = 10;
hello %= 5;
console.log(hello);

//Equality operator (==)
let x = 5;
let y = '5';
console.log(x == 5);
console.log(y == 5);
console.log(x == y);

//Javascript unary operators work on a single operand and perform verious operations, like incrementing/ decrementing, evaluating data type, negation of a vlaue,etc.
//Unary Plus (+) Operator
//The unary plus (+) converts an operand into a number, if possible. It is commonly used to enusre numerical operations on variables that may contain numeric strings. If the operand is string that represents a valid number, it will be converted to a number. Otherwise, it will evaluate to NaN (Not-a-Number).

let sl = "12";
let st = +sl;
console.log(st); //result : 12

//Here we are using typeof operator
console.log(typeof st);
console.log(typeof sl);
//"Strings cannot be converted to a number"
let tt = +"paguth";
console.log(Number.isNaN(tt)); //True because its true

//Unary increment (++) Operator

//The unary icrement operator (++) adds 1 to its operand's value and evaluates to the updated value. It can be used as a postfix or prefix operator.
//Postfix: In postfix, the current value of the variable is used in the expression, and then the variable's value is incremented by 1
//Prefix: In prefix, the vaiable's value is first incremented by 1, and then the updated value is used in the expression.

//case 1: Postfix
let ab = 12;
let ac = ab++;
console.log(ab);
console.log(ac); //Postfix

let ad = 100;
let ae = ++ad;
console.log(ad);
console.log(ae); //Prefix

//Decremetn operatros
let jj = 500;
let jh = jj--;
console.log(jh); //Value first Decrement next
console.log(jj); //Postfix decrement

//Logical !not operator
//The logical Not(!) is a unary operator that negates the Boolean value of an operand, converting true to false and falase and false to true.
let m = false;
let n = !m;
console.log(n);

//bitwise not operator
let kk = 245;
let kj = ~245;
console.log(kj);

//Math.trunc method
let summ = 10037 / 56;
console.log(Math.trunc(summ));

//typeof operator
let ll = 19;
console.log(ll);
console.log(typeof 11);

let ko = "Geeks";
console.log(typeof ko);

let istrue = true;
console.log(typeof istrue)

console.log(`It is boolean value = ${istrue}`);

let obj = {
    na : "Paguthar",
    ag : 21
};

console.log(typeof obj);

let empty1;
console.log(typeof empty1); //undefined

//deledte operator
//The delete operator in JavaScript removes a property from an object. If no other references exist, the property's memory is automatically released.

let personn = {
    namess : "Ankit",
    ages: 21,
    city: "USA"
};

console.log(personn);

delete personn.ages;

console.log(personn);

let obj1 = {
    nick: "Andrew",
    agei: 30,
    cityIn: "United States",
    company: "Google",
    salary: 30000

};

delete obj1.cityIn;

console.log(obj1); //Deldete operator

//Void operator
//The void operator evaluates the given expression and then returns undefined.

function myFunction() {
    return void 0;
}   
console.log(myFunction());

//JavaScript logical operators
//Lorgical operators are mainly used to perform the logical operations that determine the equality or difference between the values.
