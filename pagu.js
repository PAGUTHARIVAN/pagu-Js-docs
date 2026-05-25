//JavaScript Number Data types!
//1. Addition operators:-

let x = 100;
let y = 200;
console.log(`This is the value of X = ${x}`);
console.log(`This is the value of Y = ${y}`);

console.log(`Lets make a math with Additional "+" operator = `, x + y);

//Additional within the console
console.log("x + Y = ", x + y);

//Its also used to cocatenate the strings!
let name = 'Pagu';
let lastName = 'tharivan';
console.log(name + lastName); //result: Pagutharivan
console.log(name + " " + lastName); //result: Pagu tharivan

//string + Number
let mat = "10";
let num = 100;
console.log(mat + num); //result: "10100"
console.log(Number(mat) + num); //result: 110
console.log(+ mat + num);

//SUBTRACTION OPERATOR -
mat = 100;
num = 200;
console.log(mat - num); //Result -100
console.log(num - mat); //Result 100
console.log(`This is the result of the SUBTRACTION (-) operator = ${num - mat}`);
console.log(100 - 200); //result -100
console.log(200 - 100); //Result 100

//Multiplication Operator
console.log(100 * 100);

const jack = 250;
const jacki = 250;
const full = jack * jacki;
const fullResult = `This is the Result of Multiplication Operator (*) = ${full}`;
console.log(fullResult);

console.log("5" * 4); //20
console.log("hello" * 5); //Nan - Not a Number
console.log(false * 10);
console.log(null * 10);

//DIVISION OPERATOR /

let valid = 253;
let valid2 = 10;
console.log(Math.floor(valid / valid2)); // 25
console.log(5 / 2); 
console.log(5 % 2);

//Division by 0 is return as Infinty
console.log(10 / 0);
console.log(0 / 10);
console.log(-10 / 0); //result -Infinity
console.log(0 / 0); //Nan
console.log(Infinity / 1);
console.log(Infinity * 2);
console.log(100 / 110);

console.log(typeof Infinity);
console.log(typeof NaN);

console.log(isNaN(NaN)); //True
console.log(isNaN(20)); //false

//Remainder Operator %
console.log(100 % 25); //0
console.log(23 % 2);


let numb = 5;

if (numb % 2 === 0) {
    console.log("Its even number");
} else {
    console.log("Its odd number");
}

console.log(100 % 99);

//Exponentiation operator **

console.log(10 ** 2);

//calculation with and numbers and strings
console.log("hello" * 10);
console.log("20" * 10);
console.log("20" - 10);
console.log("20" / 10);
console.log("20" % 10);

//Operator precedence
console.log(10 + 5 * 5);

console.log(2 + 3 * 4); //14
console.log((2 + 3) * 4); //20
console.log(2 ** 3 * 2);
console.log(10 - 2 + 3);
console.log(10 / 2 * 5);

//Increment ++ and Decrement-- operators
let a = 5;
a++;
console.log(`Increment operator (a++) Result = ${a}`);
console.log(`Decrement operator (--a) Result = ${--a}`);

let c = 10;
let d = 10;
console.log(`c= ${c--}`); //post decrement
console.log(`c= ${--d}`); //pre decrement

let e = 10;
let f = 10;
console.log(`e= ${e++}`); //post increment
console.log(`f= ${++f}`); //pre increment

//compound assignment operators

let g = 20;

g += 5;
g -= 3;
g *= 5;
g /= 5;
g %= 2;
g **= 10;
console.log(g);

//Equality operators
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 ===false);


//Equality operators
//Loose equality
console.log(5 == `5`);
console.log(true == 1);
console.log(true === 1);
console.log(0 == false);
console.log(0 === false);

//Equality and inequality operators

let cc = 10;
let cd = 10;
console.log(cc == 10)//true
console.log(100 == '100'); //true
console.log(100 === '100'); //strict inequality operators
console.log(100 === 100);

//Loose inequality operators
console.log(200 != 200); //false
console.log(200 != 20); 

//stric ineqality operators
console.log(300 !== '300');

//comparison operators

let fullNameOfVoter = 'Pagu';
let age = 20;

if (fullNameOfVoter === 'Pagu') {
    console.log('Welcome');
} else {
    console.log('get out');
}


//1. greater than (>)
console.log(10 > 5); //Ten is greater than Five = true
console.log(5 > 10); //Five is greater than ten = false 
console.log(1000 > 500); //Thousand is greater than fivehundered = true
console.log(500 > 1000); //fivehundered is greater than thousand = false

//2. Less than (<)
console.log(5 < 10); //five is lessthan the ten = true
console.log(10 < 5); //ten is lessthan the five = false
console.log(1000 < 500); //thousand is lessthan the fivehundred = false
console.log(500 < 1000); //five hundred is lessthan the thousand = true

//3. greater than or equal to (<=)
console.log(1000 >= 500); //true
console.log(1000 >= 1000); //true
console.log(1000 >= 1001); //false

//Lesser than or equal to (<=)
console.log(100 <= 500);
console.log(101 <= 100);

//Unary operators
//1. unary +
console.log('10');
console.log(+'10');
console.log(+true);
console.log(-false);
console.log(-'10');

//logical NOT!
console.log(!true);
console.log(!false);
console.log(!'');

//Bitwise operators
console.log(5 & 3);
let bit = 32; //binary = 100000
let bit1 = 43; //binary = 101011
console.log(bit & bit1); // and operator = 32

console.log(bit | bit1); // | or operator = 43

console.log(bit ^ bit1); // ^ XOR exclusive operator = 11

console.log(`This is the Result of AND (&) Operator = ${bit & bit1};
This is the Result of OR (|) Operator = ${bit | bit1};
This is the Result of XOR (^) Operator = ${bit ^ bit1};`);

let lo = 10;
console.log(~lo);
let at = 100;
console.log(~at);

let inn = (32 << 1);
console.log(inn);
let ii = (32 >> 1);
console.log(ii);

//JavaScript: Conditional statements, Truthy values and falsy values, ternary operators

let vote = 18;
if (vote >= 18) {
    console.log("Your'e eligible to vote!");
} else {
    console.log("Your'e not eligible to vote! Sorry!");
}

let isUserLoggedIn = false;

if (isUserLoggedIn) {
    console.log("yes, User is loggedIn!");
} else {
    console.log("No user is not logged in!");
}

let gradeInExam = 60;  //< - Input!
if (gradeInExam >= 99) {
    console.log("Grade A+");
} else if (gradeInExam >= 80) {
    console.log("Grade B");
} else if (gradeInExam >= 70) {
    console.log('Grade c');
} else {
    console.log('Fail');
}

//switch 
let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("First day of the Week!");
        break;
    case "Tuesday":
        console.log("Second day of the week!");
        break;
    case "Wednesday":
        console.log("Third day of the week!");
        break;
    case "Thursday":
        console.log("Fourth day of the week!");
        break;
    case "Friday":
        console.log("Last day of the week!");
        break;
    case "Saturday":
        console.log("Its Holiday!");
        break;
    case "Sunday":
        console.log("Its Holiday");    
}

//Logical AND (&&) 
console.log(true && true); //true
console.log(true && false);
console.log(false && true);
console.log(false && false); //false
 
let driver = 18;
let goodvision = true;
if (driver >= 18 && goodvision) {
    console.log("Youre eligible to getting the driving license");
} else {
    console.log("Youre not eligible to vote!");
}

let guy = 25;
let marriage = true;
if (guy >= 20 && marriage) {
    console.log("youre married");
} else {
    console.log("Youre not married");
}

//logical operator OR ||
console.log(true || false); //true
console.log(false || false); //false
let isVip = false;
let purchaseAmount = 5001;
if (isVip || purchaseAmount > 5000) {
    console.log("youre eligible to discount");
} else {
    console.log('Youre not eligilble');
}

//Nullish coalescing operator ??

let coin = 0;
let finalScore = coin || 10;
console.log(finalScore); //result = 10

let finalScore2 = coin ?? 10;
console.log(finalScore2);








