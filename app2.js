const isLoggedIn = false;

if (!isLoggedIn === true) {
    console.log('welcome');
} else {
    console.log('please sign in first!');
}

const voteEligibility = (age) => {
    if (age >= 18) {
        return 'Your are Eligible to vote!';
    } else {
        return 'Your are not eligibile to vote sorry go back';
    }
}
console.log(voteEligibility(18));

const totalMarkCalculation = (env, agri, manag, cap, huma, gen) => {
    return `Your Semester result Percentage : ${(((env + agri + manag + cap + huma + gen) / 600 ) * 100).toFixed(2)}`;
};

console.log(totalMarkCalculation(70, 69, 70, 64, 73, 72));

const examQualificationChecker = (attendancePercentage) => {
    if (attendancePercentage > 95) {
        return `You're Eligibile to write the exam and very good Percentage!`;
    } else if (attendancePercentage > 90) {
        return `You're Eligible to write the exam congratulations!`;
    } else if (attendancePercentage > 85) {
        return `You're Eligible to write the exam congratulations!`;
    } else if (attendancePercentage >= 80) {
        return `You're Eligible to write the exam`;
    } else if (attendancePercentage > 78) {
        return `You're Eligible to write the Just border escape!`;
    } else if (attendancePercentage >= 75) {
        return `You're Border pass Man!`;
    } else if (attendancePercentage <= 75 ) {
        return `Sorry If you want to write the Exam You should pay 800 rupees fine!!`;
    } else if (attendancePercentage < 72) {
        return `Sorry your'e not Eligible for the exam!`;
    } else {
        return `Please enter your attendance percentage`;
    }
};

console.log(examQualificationChecker(71));


const examEntryChecker = (attendanceP) => {
    if (attendanceP > 75 ) {
        return `Yes Congratulations your'e Eligible for the Exam!`;
    } else if (attendanceP >= 75 ) {
        return `Your'e border pass man`;
    } else {
        return `Your'e not elibile for the exam`;
    }
}
console.log(examEntryChecker(71))

/* 
1. addition operator
2. subraction operator
3. division operator
4. multiplication operator
5. modulus operator
6. exponenetiation
7. Increment
8. Decrement
*/

//locigal operators and unary operators
const name = 'pagu';
const age = 21;
const vote = true;
const isHeHaveDrivingLicense = true;
const pincode = 624801;

if (name === 'pagu' && age === 21 && vote === true && isHeHaveDrivingLicense === true && pincode === 624801) {
    console.log('Yes you are pagu');
} else {
    console.log('Your not pagu');
}

//ternary operator

const voting = 18;
const status = voting >= 18 ? 'yes you are eligible to vote' : 'you are not eligible vote';
console.log(status);

const number = '8';
const changed = +number;
console.log(typeof changed);

const negates = -changed;
console.log(negates);

const str = '100';
console.log(-str);
console.log(typeof str);
const changeThe = (str);
console.log(typeof changeThe);

//Javascript if else statements

let i = 10;

if (i == 10) {
    if ( i < 15) {
        console.log('i is smaller than 15');

        if (i < 12)
            console.log('i is smaller than 12 too');
        else 
            console.log('is is greater than 15');
    }
}


let votingrights = true;

if (votingrights === true) {
    if (votingrights === true) {
        console.log(`You're eligible to vote!`);
        if (votingrights === true)
            console.log('Yes and you should vote this time!');
    }
}

//Javascript arrays
//Creating Array using Literal

//creating an array using array literal involves using square brackets [] to define and initialize the array

let a = [];
console.log(a);

let b = [10, 20, 30];
console.log(b);

const indef = b[0];
console.log(indef);

//Create using new keyword (constructor)

let x = new Array();

if (Array.isArray(x) === true ) {
    console.log('This is Array');
} else {
    console.log('This not Array');
}

//Accessing elements of an Array
//Any element in the array can be accessed using the index number. THe index in the arrays startswith 0.

const langArrays = ['HTMl', 'CSS', 'JS'];
const first = langArrays[0];
const second = langArrays[1];
const third = langArrays[2];
console.log(first, second, third);

const proArrays = ['Python', 'Java', 'Rust', 'Kotlin', 'JavaScript', 'Cpp'];
const proLength = proArrays.length;
console.log(proLength);

const accessLastItem = proArrays[proArrays.length - 1];
const accessLastItemb = proArrays[proArrays.length -2];
console.log(accessLastItemb);

const modify = proArrays;
modify[0] = 'Julia';
modify[1] = 'Scala';
modify[2] = 'Objective - C';
modify[3] = 'Fortron';
modify[4] = 'C';
modify[5] = 'Sql';
//adding elements to the front
modify.unshift('MernStack Development'); //The unshift() method add the element to the starting of the array
modify.push('Fullstack Development'); //The push() method add the element to the end of the array
console.log(modify);

console.log(modify.length);//

//Removing elements from an array
// To temove the elements from an array we have different methods like pop(), shift(), splice()
//The pop method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array
const arr = modify;
console.log(arr);
const removesTheLastElement = arr.pop();
const removesTheFirstElement = arr.shift();
console.log(removesTheLastElement);
console.log(arr);

console.log(arr);
const removesTheMiddleOne = arr.splice(2, 1, 'CPython');
console.log(arr);

console.log('Array Length : ' + arr.length);

const arrl = ['smaple', 'box', 'guitar'];
arrl.length = 10;
console.log(arrl.length);
console.log(arrl);

arrl[9] = 'Java';
console.log(arrl);

//Iteration through array elements
let orrays = ['Html', 'Css', 'Js'];
for (let i = 0; i < orrays.length; i++) {
    console.log(orrays[i]);
}

orrays.forEach(function myfunc(xx) {
    console.log(xx);
});

//functions in JavaScript
//In functions. parameters are placeholders defined in the function, while arguments are the actual values youpass when calling the function
function legarcay(helloword) {
    console.log('Hi bro,' + helloword);
};

legarcay('How are you?');

function say(name = 'Guest') {
    console.log("Hello," + name);
}
say();
say("Don")

//Name fubction
function named() {
    return 'Pagu';
}
console.log(named())

//Anonymous function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.
const funcy = function() {
    return 'Hi there';
};

console.log(funcy());

//Function expression when you assign a function (can be named or anonymous) to a vaiable. THe function can then be used by calling that variable

const expos = function(a, b) {
    return a + b;
};
console.log(expos(10, 20));

//Arrow Function (Es6)
//Anew way to write function usnign the => syntax. They are shorter and do not have thier own this binding, which makes them useful in sime cases.
const square = (area , width) => area * width;
console.log(square(100, 50));

(function () {
    console.log('I runs Immediately!');
}) (); //IIFE Immediately invoked function expression (IIFE)







