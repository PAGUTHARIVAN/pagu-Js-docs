//JavaScript loops//
//Loops in programming are used to repeat a block of code multiple times.
for (let i = 0; i <= 5; i++) {
    console.log(i);
};
//When you're working with loops you should be careful no to create a condition that is always true. If you do, the loop will run forever and your program will crash. This is known as an infinite loop.
for (let l = 0; l < 10; l++) {
    console.log(l);
}

//for...of loop
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
} //We have created a vaiable called  num that will represent the current number in the arrau. For iteration 1. num will be 1 for iteration 2 num will be 2 and so on.


const strings = ["JavaScript", "Python", "Java", "PhP", "NodeJs"];
for (const str of strings) {
    console.log(str);
}

const stri = 'freeCodeCamp';
for (let char of stri) {
    console.log(char);
}

const myname = "Pagutharivan";
for (let name of myname) {
    console.log(name);
}

//Array of objects
const people = [
    { name: 'Pagu', age: 21 },
    { name: 'John', age: 22 },
    { name: 'Alex', age: 23 }
];
//for...of
for (const person of people) {
    console.log(`${person.name} is ${person.age} years Old!`);
}

const peoples = [
    { name: "Pagu", age: 21, city: "NewYork", phone: 12345568 },
    { name: "Alan", age: 22, city: "Amsterdam", phone: 1234558 },
    { name: "Paul", age: 23, city: "Sydney", phone: 83756837 },
    { name: "Andrew", age: 24, city: "Tokyo", phone: 21345566 },
    { name: "Harry", age: 25, city: "Bangalore", phone: 28569398 },
    { name: "Antony", age: 30, city: "Washingdon dc", phone: 28474993}
];

for (personin of peoples) {
    console.log(`${personin.name} is ${personin.age} years old, and He is from ${personin.city} phone: ${personin.phone}`);
};

//for...in loop
//Basic syntax for...in loop

const fruit = {
    name: 'apple',
    color: 'red',
    price: 0.99
};
for (const prop in fruit) {
    console.log(fruit[prop]);
}

const cards = {
    name: "Card1",
    name1: "Card2",
    name2: "Card3",
    name3: "Card4",
    name4: "Card5",
    name5: "Card6"
};

for (const card in cards) {
    console.log(cards[card]);
}

const identity = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};
for (const props in identity) {
    console.log(identity[props]);
}

const verify = {
    name: `John`,
    age: 30,
    address: {
        street: '123 Main st',
        city: 'Anytown',
        state: 'cA'
    }
};

function isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const verf in verify) {
    if (isObject(verify[verf])) {
        for (const nestedVerf in verify[verf]) {
            console.log(verify[verf][nestedVerf]);
        }
    } else {
        console.log(verify[verf]);
    }
}

//while loop
//A while loop will run a block of code as long as the condition is true Here is the basic syntax for a while loop:

let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

let counter1 = 0;
do {
    console.log(counter1);
    counter1++;
} while (counter1 < 5);

let cout = 0;
while (cout < 10) {
    console.log(cout);
    cout++;
}

//Break statement in for loop
for (let x = 0; x < 10; x++) {
    if (x === 5) {
        break;
    }
    console.log(x);
}

//continure statement in for loop
for (let xx = 0; xx < 15; xx++) {
    if(xx === 5) {
        continue;
    }
    console.log(xx);
}
//break and contiue statement
outerLoop: for (let loo = 0; loo < 3; loo++) {
    innerLoop: for (let joo = 0; joo < 3; joo++) {
        if (loo === 1 && joo === 1) {
            break outerLoop;
        }
        console.log(`loo: ${loo}, j: ${joo}`);
    }
}