var name = 'pagu';
var name = 'kumar';
console.log(name);

var num = 30;
num = 40;
console.log(num);

//function scope
//let - ES6 
const user = {
    name: 'pagu',
    age: 21
};

console.log(user?.age);
let names = 'pagu';
let ages = 21;
let isHeMajor = true;

console.log(typeof names);
console.log(typeof ages);
console.log(typeof isHeMajor);

//Primitive data types in Javascript
/*
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
 */

//Non-Primitve data types
//Object
//Array
//Function
//String data types is used for storing the texts
let str = 'pagutharivan';
console.log(`This is String data type : ${typeof str}`);

//Numbers - Integer and Number both are numbers in JavaScript data types
let nums = 25;
console.log(`This is Number Data type : ${typeof nums}`);

//booleans is basically true or false in javascript

const btype = true;
const btype2 = false;
console.log(`This is boolean data type true : ${typeof btype}`);
console.log(`This is boolean data type false : ${typeof btype2}`);

//undefined is basically the variable is declared but not assigned the value
let def;
console.log(`This is the undefined data type : ${typeof def}`)

//Null is bascally the intentially assigned as a empty value to the variable
let nav = null;
console.log(null !== 'object');

//big int
let big = 12345n;
console.log(`This is bigInt in Javascript : ${typeof big}`);

//Symbol () It is used to creating a unique values

const id = Symbol("id");
const id1 = Symbol("id");
const isThisSame = (id === id1);
console.log(isThisSame);
console.log(`This is symbol : ${typeof id}`);

//Object

const create = {
    name: 'pagu',
    age: 21
};

console.log(typeof create);

//Array

const fruits = ["Mango", "Pappaya", "plums"];
console.log(Array.isArray(fruits));

//Function is also one of the data types in javascript
function greet() {
    console.log("greet")
}
console.log(typeof greet);

let value = null;
console.log(value === null);

if (value === null) {
    console.log(`This is null`);
}

let data = {};
console.log(data === null);

let data1 = {};
if (typeof data1 === 'object' && data !== null) {
    console.log('yes this is valid object');
} else {
    console.log('this not object');
}

const check1 = {
    name: 'pagu'
};
const check2 = {
    name: 'pagu'
};

console.log(typeof check1);

console.log(typeof check2);

console.log(check1 === check2);

const testing = {};
console.log(testing !== null);

const checkingTheUndefined = (null === null);
console.log(checkingTheUndefined);

/*
Arithmetic operators in JavaScript is used to making a mathematical calclulations:
1. Addition operator : +
2. Subtraction operator : -
3. Multiplication operator : *
4. Division operator : /
5. Modulus operator : %
6. Exponentiation operator : **
7. Increment operator : ++
8. Decrement operator : --
*/

//Arithmetic operators: Addition

let add = 50;
add += 50;
console.log(add);

let firstName = 'Pagu';
let secondName = 'tharivan';
let lastName = 'S';
console.log(firstName + secondName + " " + lastName);

let fit = '5';
let fit1 = 10;
let combine = fit + fit1;
console.log(combine);

let full = '20';
let full1 = 10;
console.log(full - full1);

let mod = 10;
if (mod % 3 === 1) {
    console.log('Youre welcome');
}

//add or even checking
let nume = 12;
if (nume % 2 === 0) {
    console.log('Its even number!');
} else {
    console.log('Its add number');
}

//Increment operator
let inc = 10;
let ince = ++inc;
console.log(ince);

let help = 100;
let help1 = '10';
console.log(help + help1);



let price = 2500;
let discount = 200;
let finalPrice = price - discount;
console.log(finalPrice);

//add or even checker

function evenOrAddChecker(num) {
    if (num % 2 === 0) {
        return `The ${num} is Even number!`;
    } else {
        return `The ${num} is Odd number`;
    }
};

console.log(evenOrAddChecker(11));

//Attendance percentage checker
const attendanceChecker = (daysPresented) => {
    if (daysPresented) {
        return `This is your Attendence percentage : ${(daysPresented / 90 * 100).toFixed(2) + '%'}`;
    } else {
        return 'Please enter your presented days!';
    }
};

console.log(attendanceChecker(80));

//Js Objects
const userMe = {
    name: 'Pagu',
    age: 21,
    course: 'Economics'
};
console.log(userMe);

//How to create the object
const newUser = {
    name: 'Pagu',
    age: 21,
    location: 'NewYork'
};
console.log(newUser);

const accessingTheObject = newUser?.location;
console.log(accessingTheObject);

const accessingTheObjectWithBracket = newUser["age"];
console.log(accessingTheObjectWithBracket);

newUser.name = 'Rockstar';
console.log(newUser);
//New property add
newUser.favfood = 'Biriyani';
console.log(newUser);

delete newUser.age;
console.log(newUser);

//Accesing the arrays in objects

const oobject = new Object();

oobject.skills = ["Python", "Java", "Rust", "JavaScript"];
console.log(oobject);

console.log(oobject.skills[2]);


delete oobject.skills;
console.log(oobject);

//Accessing the nested object

const creatObj = {
    name: 'pagutharivan',
    age: 21,
    city: 'Newyork',
    performance: 'Good',
    personalDetails: {
        email: 'pagutharivan',
        phone: 123456788,
        pincode: 624801
    }
};

console.log(creatObj);
//Accessing the objects

const accessFullObj = creatObj?.personalDetails?.pincode;
const successed = `The ${accessFullObj} is Successfully Accessed!!`; // It is accessing the pincode
console.log(successed)

//Object method;
const userNew = {
    name: 'pagu',
    greet: function () {
        console.log(`Hello world I am ${this.name}`);
    }
};

userNew.greet();

//for in loop method is usefull to accessing the objects in JavaScript
const creatObbj = {
    name: 'pagu',
    age: 21,
    location: 'Tokyo Japan'
};

console.log(Object.keys(creatObbj));
console.log(Object.values(creatObbj));
console.log(Object.entries(creatObbj));

for (let key in creatObbj) {
    console.log(key + ": " + creatObbj[key]);
}

