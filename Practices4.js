const emptyArr = new Array(5);
emptyArr[0] = 'Hello';
emptyArr[1] = 'World';
emptyArr[4] = 'JavaScript';
emptyArr[2] = 'Web';
emptyArr[3] = 'Dev';
console.log(emptyArr);

console.log(emptyArr.length);

const lengthArray = Array.from({length: 10});
console.log(lengthArray);

lengthArray[8] = 'Js';
lengthArray[7] = 'Rust';
lengthArray[0] = 'Java';
lengthArray[1] = 'Kotlin';
lengthArray[2] = 'Cpp';
lengthArray[3] = 'Node.js'
lengthArray[4] = 'Ruby';
lengthArray[5] = 'Lua';
lengthArray[6] = 'Assembly';
lengthArray[9] = 'C';
console.log(lengthArray); 

const filling = new Array(10).fill('Pagu');
console.log(filling);

//linters
function longFunction(
     argument1,
     argument2,
     argument3
) {
    return argument1 + argument2 + argument3;
}

console.log(longFunction(1,2,3));

//JavaScript closures

function outerFunction(x) {
    let y = 10;
    function innerFunction() {
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(10);
console.log(closure());
//

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter());

function multiply(x) {
    return function(y) {
        return x * y;
    };
}

let double = multiply(10);
console.log(double(4));