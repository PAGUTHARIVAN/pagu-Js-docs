//Understanding Functions
//In function, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function.
function greet(name) {
    //name is a parameter
    console.log("Hello " + name);
}

greet("Alice"); //Alice is the argument

function greet1(name2) {
    console.log("Good " + name2);
}

greet1("Morning");

function wish(hisName) { //hisName is a parameter
    console.log("Happy birthday " + hisName);
}
wish("Pagu"); //pagu is a argument 

function work(companyName) {
    console.log("What is Your company name ? " + companyName);
}
work("Apple");
//Parameter: name(placeholder inside the function)
//Argument: "ALice" (real value given at call time).

//Default Parameters
//Default parameters are used when no arguments provided during the function call.
//If no value is passed,the function automatically uses the default value.

function defaults (well = "Default") {
    console.log("hello " + well);
}
defaults();

function food(favfood = "Biriyani") { //favfoods value is default value for the calling function
    console.log("What is your favorite food " + favfood);
}
food();

//Return Statement
//The retunr statemetn sis used to send a result back from a function 
//When return executes, teh function stops running at that point
//The returned value can be stored in a variable or used directly.

function add(a, b) {
    return a + b; //returns the sum
    console.log("")//The functon stops running at that point
}
let result = add(5, 10);
console.log(result);

function sub(a, b) {
    return a - b;
}
let subs = sub(10, 15);
console.log(subs);

//Types of functions
//A function that has its own name when declared. It's easy to reuse and debug because the name shows up in error messages or stack traces.
//Named function
function greeting() {
    return "Hello!";
}
console.log(greeting());

function pagu() {
    return "whats your name";
}

console.log(pagu());

//2. Anonymous function
//A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.
const greet11 = function() {
    return "hi there!";
};
console.log(greet11());

const hellooo = function() {
    return "Hello guys";
}
console.log(hellooo());

//3. Function Expression
//When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling that variable.
const add11 = function(a, b) {
    return a + b;
};
console.log(add(2, 3));

const sub11 = function(b, c) {
    return b - c;
};
console.log(sub11(10, 7));

//Arrow function (ES6);
//A new way to write function using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.
const square1 = n => n * n;
console.log(square1(10));

const sub111 = (ll, bb) => ll + bb;
console.log(sub111(10,10));

const truck = xx => xx * xx;
console.log(truck(5));

const car = ddd => ddd ** ddd;
console.log(car(5));

const bike = (zz, ww) => zz - ww;
console.log(bike(100, 5));

const bus = (nn, qq) => nn ** qq;
console.log(bus(5,3));


const wheel = (power, ability) => {
    return power + ability;
}
console.log(`This Calculated by the Arrow Function in JavaScript(=>) = ${wheel(100, 100)}`);


function getting(name13) {
    console.log("Hello " + name13);
}
getting("Pagu");

const add10 = u => u * u;
console.log(add10(8));

const val = (uu, uv) => uu + uv;
console.log(val(10, 20));

const val1 = (uvm, uvx) => {
    return uvm - uvx;
}
console.log(val1(100, 50));

//Immediately Invoked function expression (IIFE)
//IIFE functions are executed immediately after theri definition They are often used to create isolated scopes.

(function() {
    console.log("This runs immdediately!");
}) ();

(function() {
    console.log("This is called the IIFE function");
}) ();

(function(his) {
    console.log("Happy birthday " + his);
}) ("pagu");

(function(company) {
    console.log("what is your company name" + company);
})("Linux");

(function(food) {
    console.log("What is your favorite food " + food);
})("Pizza");

//callback function
//A cllback function is passed as an argument to another function and is executed after the completion of that function.
function fetchData(o, callback) {
    return callback(o);
}
const double = (o) => o * 2;
console.log(fetchData(5, double)); 

function datac(p, callback2) {
    return callback2(p);
}
const triple = (p) => p * 3;
console.log(datac(10, triple));

function dataa(r, callback3) {
    return callback3(r);
}
const quadruple = (r) => r * 4;
console.log(dataa(30, quadruple));

function dataccc(sl, callback4) {
    return callback4(sl);
}
const quintuple = (sl) => sl * 10;
console.log(dataccc(50, quintuple));


function pagu0() {
    console.log("Hello Pagu");
}
pagu0();

function pagu1(nameS) {
    console.log("Hello " + nameS);
}
pagu1("Pagu");

function pagu3(name1111) {
    return "Hello " + name1111;
}
console.log(pagu3("Pagu"));
//Arrow functions
const vital = (name222) => name222 * name222;
console.log(vital(10));

const sub1 = (sub2, sub3) => sub2 - sub3;
console.log(sub1(100, 50));

const add1 = (add2, add3) => add2 + add3;
console.log(add1(20, 20));

const dividess = (div1, div2) => {
    return div1 / div2;
}
console.log(dividess(100, 5)); //function

