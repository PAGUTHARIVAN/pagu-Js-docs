//Javascript :-

//Variables in JavaScript are used to store data values. They can be declared in different ways depending on how the value should behave.
//let, const, var

//preferred for non-constant

//let or const are preferred over var: initially, all the variables in JavaScript were written using the var keyword but in ES6 the keywords let const were introduced. The main issue with var is scoping.


const ob = { a: 10 };
ob.a = 30;
console.log(ob);

const arr = [10, 20, 30];
arr[2] = 400;
console.log(arr);

//Scope of variables in JavaScript
//Scope in Javascript defines where a variable can be accessed or used within a program. It controls the visibility and lfetime of variables across different parts of the code.
/* 
* global scope
* local(function) scope
* block scope
*/ 

//Declaring a global variable
let x = 10;

function func() {
    //Declaring a local variable
    let y = 20;

    //Accessing local and global variables
    console.log(`${x}, ${y}`);
}

func();//function calling

//Global and local scope
let a = 10; //Global var

function fun1() {
    let b = 30; //Local var

    console.log(`Global var: ${a}`);
    console.log(`Local var: ${b}`);

}

fun1(); //function calling

//Global scope
//A global variable refers to a variable that is declared outside any function or block,so it can be used anywhere in the program, both inside functions and in the main code.
const l = 10; //global var
function fun2() {
    console.log(l); //Global var accessed from within a function
}

fun2();

//Local Scope
//A local scope variable is a variable declared inside a function, making it accessible only within that function. It cannot be used outside the function.

function fun3() {
    let m = 20;
    console.log(m);
}

fun3();

//Block and lexical scope
function func4() {
    let x = 10; //Local variable

    {
        let y = 20;
        console.log(`This is Block scope: ${y}`); //Block scope
    }

    function func5() {
        console.log(`This is Lexical scope: ${x}`); //Lexical scope
    }

    func5();
}

func4();

//block creation

{
    var c = 10;
    //var can Acessible inside & outisde the block scope

    const b = 20;
    let w = 30;
    //let, const Accessible only inside the block scope

    console.log(`This is block scoped(const) : ${b}`);
    console.log(`This is block scoped(let) : ${w}`);

}

console.log(c);

//Lexical scope
//The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope

function funct() {
    const x = 10;
    
    function funct1() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    funct1();
}
funct();

//Javascript operators
//Javascript operators are symbols or keywords used to perform operations on values and variables. They are the building blocks of Javascript expressions and can manipulate data in various ways.

//Arithmetic operators
//The addtion operator takes two numerical operands and gives theri numerical sum. It also concatenates two strings or numbers
//Addithion operator
let v;
v = 1;
let vv = 2;
let combine = v + vv;
console.log(v);
console.log(combine);

let yy = 5 + 'hello';
console.log(yy);

//subtraction operator
let sub = 10 - 4;
console.log(sub);
let sub1 = 'hello' - 1;
console.log(sub1);

//Mulitplication operator
let mul = 3 * 3;
console.log(mul);
let mul1 = -4 * 4;
console.log(mul1);

let mul2 = Infinity * 0;
console.log(mul2);
let mul3 = Infinity * Infinity;
console.log(mul3);

let mul4 = 'helo' * 2;
console.log(mul4);

//Division operator
//The division operatro provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend

let div = 5 / 2;
console.log(div);
let div1 = 1.0 / 2.0;
console.log(div1);

let div2 = 3 / -0.0;
console.log(div2);

let div4 = 9 / 5;
console.log(div4);

let div5 = 20 / 32;
console.log(div5);

let div6 = 30 / 41;
console.log(div6);

let div7 = -12 / 5;
console.log(div7);

let div8 = NaN / 5;
console.log(div8);

//Modulus % operator
let mod = 9 % 5;
console.log(mod);

let mod1 = -12 % 5;
console.log(mod1);

let mod2 = 1 % -2;
console.log(mod2);

let mod3 = -12 % 5;
console.log(mod3);

let divd = 5.5 / 2;
console.log(divd);

let divc = 11.5 / 4;
console.log(divc);

let modi = 5.5 % 2;
console.log(modi);

let modi1 = NaN % 2;
console.log(modi1);

//Increment operator
let count = 100;
let counter = ++count;
console.log(counter);

//Unary Negation (-) Operator
let negate = 3;
e = -negate;
console.log(e);

let str = +'100';

console.log(str);

function counterr () {
    let count = 0;
    return function inner () {
        count++;
        console.log(count);
    }
}

const incrementer = counterr();
incrementer();

//Js comparison operators

let val = 5;
let val1 = '5';

console.log(val == 5);
console.log(val1 == 5);
console.log(val == val1);

console.log('\n');

console.log(NaN == NaN);
console.log(0 == false);
console.log(0 == null);

//Inequality operator
console.log(val != 6);
console.log(val1 != '5');
console.log(val != val1);

console.log(0 != false);
console.log(0 != null);
console.log(NaN != NaN);

//Strict equaltiy operator ( === )

let vol = 5;
let vol1 = '5';

console.log(vol === 6);
console.log(vol1 === '5');
console.log(vol === vol1);

console.log(NaN === NaN);
console.log(0 === false);
console.log(0 === null);

//Strict inquality operator
console.log(vol !== 5);
console.log(vol1 !== '5');
console.log(vol !== vol1);


console.log(0 !== false);
console.log(0 !== null);
console.log(NaN !== NaN);

console.log(0 === false);

