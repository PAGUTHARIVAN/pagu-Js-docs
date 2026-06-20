 const person = {
    name: 'pagutharivan',
    age: 21,
    email: 'pagutharivan2004@gmail.com',
    personalDetails: {
        phone: 6374995922,
        job: 'SoftwareEngineer',
        address: {
            city: 'chennai',
            state: 'TamilNadu',
            country: 'India',
            pincode: 624801
        }
    }    
};

console.log(person);

const { name, age, email, personalDetails: {phone, job, address: {city, state, country, pincode}}} = person;
const usersName = name;
const usersAge = age;
const usersEmail = email;
const usersPhone = phone;
const usersJob = job;
const usersCity = city;
const usersState = state;
const usersCountry = country;
const usersPincode = pincode;

console.log(usersAge);

for (const [key, value] of Object.entries(person)) {
    console.log(`${key} : ${value}`);
};

function objCracker (obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if ( typeof value === 'object' && value !== null) {
            objCracker(value);
        } else {
            console.log(`${key} => ${value}`);
        }
    });
};

objCracker(person);

const person2 = {
    ...person
};

console.log(person2);

person2.name = 'Pagutharivan S';
console.log(person2);
//Functions in Javascript
//Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. They can take inputs, perform actions, and return outputs.
//Understanding Functions
//In functions, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function.
function greet(name) { //name is the parameter
    console.log('hello ' + name);
}

greet('pagu'); //pagu is the argument

function greet1(name = 'Pagu') {
    console.log('Hello Mr. ' + name);
}
greet1();
greet1('Raja');

//Return statement
//The return statement is used to send a result back from a function.
//When return executes, the function stops running at that point.
//The returned value can be stored in a variable or used directly.

function add(a, b) { // <- This is called named function in JavaScript
    return a + b; //returns the sum
}
console.log(add(10, 5));
const result = add(10, 20);
console.log(result);

//Type of functions
//Anonymous function
//An anonymous function is a function defined without an explicit name. It is commonly used as callback or assigned to a variable.

const greet3 = function() {
    return 'Hi there!';
};

console.log(greet3());

//Function expression
//An function expression is a function created as part of an expression and assigned to a variable or passed to another function. It can be named or anonymous
const add1 = function(a, b) {
    return a + b;
};
console.log(add(2, 3));

const mult = function(a, b) {
    return a * b;
}
console.log(mult(10, 5));

const div = function(a, b) {
    return a / b;
};
console.log(div(10, 4));

const mod = function(a, b) {
    return a % b;
};
console.log(mod(10, 3));

//Arrow Function (ES6) 
//A new way to write functions using the => syntax. They are shorter and do not have their own this binding. Which makes them useful in some cases
const square = n => n * n;
console.log(square(10));

//Immediately Invoked function Expression (IIFE)
//Are executed immediately after their definition they are often used ot create isolated scopes
(function() {
    console.log("This runs immediately!");
})();

(function() {
    console.log(10 * 10);
})();

//Callback functions
//A callback function is passed as an argument to antoher function and is executed after the completion of that function.
function num(n, callback) {
    return callback(n);
}
const double = (m) => m * 2;
console.log(num(5, double));

function multi1(n, callback) {
    return callback(n);
}
const multi = (n) => n * 10;
console.log(multi1(20, multi));

function greeter(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greeter("Ajay", sayBye);

function greeter1(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function second() {
    console.log("Bye bye");
}

greeter1('Pagu', second);

//Working of callbacks in javaScript: In JavaScript executes code line by line (synchronously), but sometimes we need to delay execution or wati for a task to complete befor running the next function. Callbacks help achieve this by passing a function that is executed later.

//Call backs for Asynchronous Execution

//console.log("Start");

//setTimeout(function () {
  //  console.log("Inside setTimeout");
//}, 2000);

//console.log("End");

//Callbacks in Functions Handling operations
//When a function nedds to execute different behaviours based on  input, callbacks make the function flexible
function calc(a, b, callback) {
    return callback(a, b);
}

function add3(x, y) {
    return x + y;
}
function mult3(x, y) {
    return x * y;
}
console.log(calc(5, 3, add3));
console.log(calc(10, 3, mult3));

function divi(a, b, callback) {
    return callback(a, b);
}

function add0(a, b) {
    return a + b;
}
console.log(divi(100, 100, add0));//

//closures in Javascript

const counter = () => {
    let count = 0; //private var

    const inner = () => {
        count++;
        console.log(count);
    }

    return inner;
}

const increme = counter();
increme();
increme();
increme();

//closure in JavaScript
//A closure is the combination of a function and its lexical environment, allowing the function to access variables from its outer scope even after the outer function has finished executing.
/* 
Retains access to outer function variables
Preserves the lexical scope
Allows data encapsulation and privacy
commonly used in callbacks and asynchronous code.
*/

function outer() {
    let outerVar = "I'm in the outer scope!";

    function innerf() {
        console.log(outerVar);
    }
    return innerf;
}

const closure = outer();
closure();

//Lexical scoping
//Closures rely on lexical scoping, which means a function's scope is determined by where it is defined, not where it is executed
//A function retains access to the scope where it was defined.
//Enables closures to 'remember' their environment.

//Private Variables
//Closures allow a function to keep variables private and accessible only within that function, which is commonly used in modules to protect data from being accessed or modified by other parts of the program
//Helps achieve data encapsulation
//Create private variables
//Prevents accidental data modification
const counter3 = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },

        reset: function() {
            count = 0;
            console.log("Counter reset");
        },


    };
})();

counter3.increment();
counter3.increment();
counter3.increment();
counter3.reset();

//example 2

const counter4 = (function() {
    let count = 0;

    return {
        increment4: function() {
            count++;
            console.log(count);
        },

        reset1: function() {
            count = 0;
            console.log(`Counter reset`);
        },
    };
})();

counter4.increment4();
counter4.increment4();
counter4.increment4();
counter4.increment4();
counter4.reset1();
counter4.increment4();

const counter5 = (function() {
    let count = 0;

    return {
        incrementer1: function() {
            count++;
            console.log(count);
        },

        reseter: function() {
            count = 0;
            console.log(`Counter reset successfully`);
        }
    };
})();

counter5.incrementer1();
counter5.incrementer1();