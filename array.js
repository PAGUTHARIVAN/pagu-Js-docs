function outer () {
    let name = 'Pagutharivan';
    function inner () {
        console.log(name);
    }
    return inner;
}

const result = outer();
result();

function createUser(password) {
    return {
        checkPassword(input) {
            return input === password;
        }
    };
} 

const user = createUser("12345");
console.log(user.checkPassword("12345"));
console.log(user.checkPassword("11111"));

//pincode checking//

function pinChecker(pincode) {
    return {
        checker (input) {
            return input === pincode;
        }
    }
};

const check = pinChecker('624801');
console.log(check.checker('983759'));

function phoneNumChecker(phoneNum) {
    return {
        phoneCheck(input) {
            return input === phoneNum;
        }
    }
};

const phone = phoneNumChecker('6374995922');
console.log(phone.phoneCheck('8375970584'));

//Closures in JavaScript

//Types of scope in JavaScript
//Javascript has two main types of scopes: Function scope and block scope.
//1. Function scope
//Variables defined within a function are not accessible from outside of the function
function demoFunctionScope() {
    let foo = 'I exist only inside this function';
    console.log(foo);
}

demoFunctionScope();

//Block scope 
//With the introduction of ES6. JavaScript supports block scope using let and const keywords. THis means variables declared inside curly braces (like those found in loops or conditionals) are not accessible outside of them.

if (true) {
    let blockScopedVariable = 'I am block scoped';
    console.log(blockScopedVariable);
};

//What are CLosures?
// A closure is a feature that allows a function to remember its lexical scope even when the function is executed outside that lexical scope. It effectively enables a function to "close over" its surrounding environment. granting it access to variables even after they are out of scope.


//How closures work
//When a function is created in JavaScript, it forms a closure that captures the variables in its scope. THerefore, when that function is invoked, it retains access to those outer variables.

function outerFunction() {
    let outerVariables = 'I am from outer scope!';

    function innerFunction() {
        console.log(outerVariables);
    }
    return innerFunction;
}

const myClosure = outerFunction();

myClosure();

//Practical use cases of closures
//Understanding closures opens up new ways to solve problems, and they can be utilized in various scenarios;

//1 Data privacy
//Closures can help create private variables that cannot be accessed from the outside.
function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },

        decrement: function () {
            count--;
            return count;
        },

        getCount: function () {
            return count;
        }
    };
}

const counterMain = createCounter();
console.log(counterMain.increment());
console.log(counterMain.increment());
console.log(counterMain.increment());
console.log(counterMain.increment());

console.log(counterMain.getCount());
console.log(counterMain.decrement());

//2. Function Factories
//Closures can be used to create functions that remember specific values, effectively creating function factories

function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));