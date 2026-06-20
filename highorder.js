

const numbers = [10, 20, 30, 30, 40, 50];
const finder = numbers.find((num) => num > 20);
console.log(finder);

const users = [
    { id: 101, name: "Arun", role: "Admin" },
    { id: 102, name: "Karthick", role: "User" },
    { id: 103, name: "Siva", role: "User1" }
];

const targetuser = users.find(user => user.id === 103);
console.log(targetuser);

const fruits = ['mango', 'orange', 'grapes'];
const arrf = fruits.find((item) => item === 'grapes');
console.log(arrf);

const users1 = {
    ...users
}
console.log(users1);

const arrm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrmath = arrm.map(num => num * num);
console.log(arrmath);

const filer = arrm.filter(num => num > 5);
console.log(filer);

const reducer = arrm.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(reducer);

const analy = arrm.includes(10);
console.log(analy);

const arraysOfFruits = ['mango', 'orange', 'grapes', 'cherry', 'pineapple'];
const arrff = arraysOfFruits.includes('orange');
console.log(arrff);

const person = {
    name: 'pagu',
    age: 21,
    city: 'tokyo',
    phone: 6374995922,
    sayHello: function () {
        console.log(this.name);
    }
}

const { name, age, city, phone, sayHello } = person;
console.log(name);
console.log(age);
console.log(city);
console.log(phone);
const a = person.sayHello();

const user5 = {
    ...person,
    email: 'pagutharivan@gmail.com'
}
console.log(user5);

//control flows
//Javascript switch statement

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName);

let grade = 'B';
let result;

switch (grade) {
    case 'A':
    case 'B':
    case 'C':
        result = 'Grade is good';
        break;
    case 'D':
        result = 'Grade is Poor';
        break;
    default:
        result = 'No grades achieved';
}

console.log(result);


const userMain = {
    name: 'Arun',
    age: 28,
    skills: ["JavaScript", "React"],
    isActive: true
};

const jsonstring = JSON.stringify(userMain);
console.log(jsonstring);

const formatedJson = JSON.stringify(userMain, null, 10);
console.log(formatedJson);

const userer = {
    name: 'pagu',
    age: 21,
    city: 'Berlin',
    email: 'pagutharivan@gmail.com'
}
const changeThistoJson = JSON.stringify(userer, null, 2);
console.log(changeThistoJson);

const toParsing = JSON.parse(changeThistoJson, function (key, value) {
    if (key === "age") {
        return value;
    }
});
console.log(toParsing);

//create Array using literal
let arrp = new Array(10, 20, 30);
console.log(arrp);
//Use the array literal method for efficiency readabiltiy and speed

let ae = ["HTML", "CSS", "JS"];
console.log(ae[0], ae[1], ae[2]); //accessing elements of an array

const arraysOfSkills = ['Music', 'Drawing', 'Painting', 'Dancing', 'Singing'];
console.log(arraysOfSkills.length);
console.log(`First Item : ${arraysOfSkills[0]}`);
console.log(`Last Item : ${arraysOfSkills[arraysOfSkills.length - 1]}`);

//Modifying the Arrays
let createArr = ['React', 'Angular', 'Vue'];
createArr[0] = 'Next.Js';
createArr[1] = 'Node.Js';
createArr[2] = 'Express.Js';
createArr[3] = 'Maven Java';
createArr[4] = 'Kotlin';
createArr[5] = 'Typescript';
console.log(createArr.length);

let createArr1 = [];

let pushing = createArr1.push('Python', 'Kotlin', 'Rust');
console.log(createArr1);

let pushOnf = createArr1.unshift('C', 'Cpp', 'Ruby');
console.log(createArr1);

//Removing elements from the Array
//To remove the elements from an array we have different methods like pop(), shift(), or splice().
//The pop() method removes an element from the last index of the array.
//The shift() method removes the elment from the first index of the arrya
// The splice() method removes or replaces the element from the array.

let orginalArr = ['HTML', 'CSS', 'JS'];
let lst = orginalArr.pop();
console.log(`After Removing the last: ` + orginalArr);
let fst = orginalArr.shift();
console.log(`After Removing the first : ${orginalArr}`);

orginalArr.splice(1, 1);
console.log(`After Removing 2 elements starting from index 1: ` + orginalArr);


const orginArr = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS', 'EXPRESSJS', 'MONGODB', 'NEXTJS'];
orginArr.splice(3, 1, 'TAILWINDCSS');
console.log(orginArr);
//for loop
for (let c = 0; c < orginArr.length; c++) {
    console.log(orginArr[c].toLowerCase());
}
//foreach loop
orginArr.forEach(function myfunc(x) {
    console.log(x);

})

//Array concatenation
//combine two ro more arrays using the concat() method. It returns new array containing joined array elements.

//creating an Array and Initializing with values.
const arrOfCon = ['Kotlin', 'Css', 'Js', 'React'];
const arrOfCon1 = ['Node.js', 'Express.js'];

//concate both arrays
const joint = arrOfCon.concat(arrOfCon1);
console.log(joint);

const concate = [...joint];
console.log('Rested Array : ', concate);

const conv = concate.toString();
console.log(`The stringed version of the array : ${conv}`);

console.log(typeof conv);

console.log(Array.isArray(concate));

//Objects in Javascript 
// An object is a dynamic data structure that store related data as key-value pairs, where each key uniquely indentifies its value.
//The values of properties can be primitves, objects, or functions (known as methods when defined inside an object).
//Objects are mutable and dynamic properties can be added, modified, or deleted at any time.
//Objects allow data grouping and encapsulation, making it easier to manage related information and behaviour together.

//creation using object literal
let obj = {
    name: 'Pagutharivan',
    age: 21,
    job: 'Developer'
};

console.log(obj);

//Using object constructor for object creation
let obj1 = new Object();
obj1.name = 'Pagu';
obj1.age = 21;
obj1.city = 'LosAngeles';
obj1.phone = 6374995922;
console.log(obj1);

//Accessing object properties you can use either dot notation or bracket notation.
console.log(obj1['name']);
console.log(obj1['age']);
console.log(obj1['city']);
console.log(obj1['phone']);

console.log(obj.name);
console.log(obj.age);
console.log(obj.job);

//create new obj with object literal

const objectn = {
    name: 'pagutharivan',
    age: 21,
    city: 'Morroco',
    phone: 6374995922,
    email: 'pagutharivan@gmail.com'
}

console.log(objectn);

objectn.name = 'Antony';
console.log(objectn);

objectn.favcolor = 'Black';

for (const [key, values] of Object.entries(objectn)) {
    console.log(`${key} : ${values}`);
}

console.log(objectn);

delete objectn.favcolor;
console.log(objectn);

const propChecking = objectn.hasOwnProperty('name');
const propCA = objectn.hasOwnProperty('age');
const propci = objectn.hasOwnProperty('city');
const propp = objectn.hasOwnProperty('phone');
const prope = objectn.hasOwnProperty('email');
console.log(propChecking);
console.log(propCA);
console.log(propci);
console.log(propp);
console.log(prope);
console.log('name' in objectn);

console.log(Object.hasOwn(objectn, 'name'));

for (const key of Object.keys(objectn)) {
    console.log(key);
}

//Merging two objects into one

const object3 = {
    ...obj,
    ...obj1
};

console.log(object3);
console.log(Object.keys(object3).length);

//Recogninzing the Javascript objects
console.log(typeof object3 === 'object' && object3 !== null);
if (typeof object3 === 'object' && object3 !== null) {
    console.log('This is pure object');
} else {
    console.log('good!');
}

//Javascript strings methods
//1. slice method
let w = 'Geeks for Geeks';
console.log(w.length);

let letterCount = 0;
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (let l = 0; l < w.length; l++) {
    let char = w[l];

    if (letters.includes(char)) {
        letterCount++;
        
    }
    console.log(`The total letter count is : ${letterCount}`);

};

let word = 'pagutharivan is a cool guy';
let wslice = word.slice(0, 1);
let wslice1 = word.slice(1);

let changeOne = wslice.toUpperCase();
console.log(wslice);
console.log(wslice1);

console.log(changeOne);
const comb = changeOne + wslice1;
console.log(comb);

//substring ()
let str2 = "Mind, Power, Soul";
let part = str2.substring(6, 11);
console.log(part);

const cuttingName = 'pagutharivan';
const firstL = cuttingName.slice(0, 1).toUpperCase();
const remainsing = cuttingName.substring(1);
console.log(remainsing);

let combin = firstL + remainsing;
console.log(combin);

let sentence = 'How are you Javascript';
console.log(sentence.indexOf("J"));

const st = sentence.substring(12);
console.log(st);

let question = 'What you want?';
const qr = question.replaceAll("you", "Java");
console.log(qr);

//Padstart
//padstart() pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.
let stone = 'soul';
stone = stone.padStart(9, "Mind");
console.log(stone);

const person4 = {
    name: 'pagu',
    age: 21,
    job4: 'developer',
    personald: {
        emailp: 'pagutharivan@gmail.com',
        phonep: 6374995922,
        pincodep: 624801,
        address: {
            city4: 'chennai',
            country4: 'India'
        }
    }
};

console.log(person4);

//object destructuring
const { name4, age4, job4, personald: {emailp, phonep, pincodep, address: {city4, country4}}} = person4;
console.log(country4);

for (const [key, value] of Object.entries(person4)) {
    console.log(`${key} : ${value}`);
}

function interateWithEntries(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            interateWithEntries(value);
        } else {
            console.log(`${key} : ${value}`);
        }
    });
}

interateWithEntries(person4);

//again 
const objectCracker = (obj) => {
    Object.entries(obj).forEach(([key, value]) => {
        if ( typeof value === 'object' && value !== null) {
            objectCracker(value);
        } else {
            console.log(`${key} : ${value}`);
        }
    });
};


const obj10 = {
    personN: 'Pagutharivan',
    personAge: 21,
    personPh: 6374995922,
    personCi: 'Tokyo'
};

console.log(obj10);

const simpleCracker = (obj) => {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            simpleCracker(value);
        } else {
            console.log(`${key} : ${value}`);
        }
    });
};
simpleCracker(obj10);

let pusarr = {};
for (const key of Object.keys(obj10)) {
    pusarr.items = key;
}
console.log(pusarr);