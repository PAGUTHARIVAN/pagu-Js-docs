//Types of functions in javascript
//1. Named function

function sayHello(name) {
    console.log('Hello ' + name);
}

const greet = (name) => {
    console.log('Hi ' + name);
}

greet('Pagu');

const sentences = (name, sentences) => {
    console.log('Hi ' + name + sentences);
}

sentences('Pagu ', 'What are you doing ?')


console.log(greeting('Javascript'))

function greeting(name) {
    return 'Hello, world ' + name;
}

const add = (sum, sum1) => sum + sum1;
console.log(add(100, 100));

const sub = (sub, sub1) => sub - sub1;
console.log(sub(100, 5));

function totalProfit(income, expenditure) {
    return income - expenditure;
}
console.log(totalProfit(1000, 400));

//Anonymous function
//A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly
const jon = function() {
    return 'Software Engineer';
};
console.log(jon());

const pincode = function() {
    return 624801;
}
console.log(`This is your pincode: ${pincode()}`);

const email = function() {
    return 'pagutharivan2004@gmail.com';
}
console.log(`This is your email : ${email()}`);

const work = function() {
    return 'Software Engineer at Nvidia';
}

console.log(work());
work();

//Function expression 
//When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling that variable
const div = function(a, b) {
    return a / b;
}
console.log(div(10, 5));

const multi = function(x, y) {
    return x * y;
}
console.log(multi(100, 5));

const expo = function(d, c) {
    return d ** c;
}
console.log(expo(10, 10));

const modulus = function(dd, ee) {
    return dd % ee;
}
console.log(modulus(100, 35));

const add1 = function(a, b) {
    return a * b;
}
console.log(add1(20, 4));

const add2 = function calculate(b, c) {
    return b + c;
}
console.log(add2(10, 4));

//Immediately invoked function expression
(function () {
    console.log('It is run immediately');
})();


//callback function
function nums(d, callback) {
    return callback(d);
}
const doubles = (d) => d * 2;
console.log(nums(5, doubles));

function express(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

function callCard() {
    console.log('How are you');
}

express('Pagu', callCard);

function react(names, callback) {
    console.log('How are you ' + names);
    callback();
}

function saying() {
    console.log('Yeah I am good!');
}

react('Pagu', saying);

//Javascript objects

//An object is a dynamic data structure that stores related data as key-value pairs, where each key uniquely identifies its value.
//Object literal

let obj = {
    name: 'Pagu',
    age: 21,
    job: 'Developer'
};
console.log(obj);

//Creation using Object() constructor

let obj1 = new Object();
obj1.name = 'Pagutharivan';
obj1.age = 21;
obj1.job = 'Developer';
obj1.city = 'Chennai';

console.log(obj1);

//Accessing Object properties
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.job);
console.log(obj1.city);

//Modifying Object properties
obj1.name = 'Harry potter';
obj1.age = 21;
obj1.job = 'Developer';
obj1.city = 'Tokyo';

console.log(obj1); //modified

//Adding properties to an object
obj1.course = 'Economics';
obj1.name = 'Pagutharivan';
console.log(obj1);

delete obj1.course;

console.log(obj1);

console.log(Object.hasOwn(obj1, 'age'));
console.log(obj1.hasOwnProperty('age'));

for ( const key in obj1) {
    console.log(key + ': ' + obj1[key]);
}

for (const key in obj) {
    console.log(key + ": " + obj[key]);
}

//Merging objects
let fruit1 = {name1: 'Mango'};
let fruit2 = {name2: 'Apple'};

let merge = {...fruit1, ...fruit2};
console.log(merge);

let value1 = {a: 10};
let value2 = {b: 20};
let value3 = {c: 40};

const valuess = Object.assign({}, value1, value2, value3);
console.log(valuess);

//Object length
let obj2 = { name: 'sourav', age: 21}
console.log(Object.keys(obj2).length);

const checkObj = typeof obj2 === "object" && obj2 !== null;
console.log(checkObj);

//Javascript strings
let str = 'Javascript';
let lengthof = str.length;
console.log(`Total length of the string is : ${lengthof}`);

//string concatenation
let first = 'Java';
let second = 'Script';
let combine = first + second;
console.log('Concatenated String: ' + combine);

//Escape characters in Javascript
//We can use escape characters in string to add single quotes dual quotes, and backslash
const s1 = "\'Gfg\' is a learning portal";
const s2 = "\"Gfg\" is a learning portal";
const s3 = "\\Gfg\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);

//Finding a substring of a string
let s5 = 'Javascript Tutorial';
let s6 = s5.substring(0, 10);
console.log(s6);

let s7 = 'Amit Ray';
let s8 = s7.substring(0, 4);
let s9 = s7.substring(5);
console.log(s8);
console.log(s9);

const strings = 'JavaScript is the wonderful language';
const subs = strings.substring(14);
console.log(subs);

const checkss = strings.indexOf('w');
const checkss1 = strings.indexOf('l');
const cutSubs = strings.substring(18, 27);
const inc = strings.indexOf(strings.includes('language'));
const cut = strings.substring(strings.indexOf(-1));
console.log(cut);
console.log(inc);
console.log(checkss);
console.log(checkss1);
console.log(cutSubs);

//Extracting a portion of URL
//You can use substring() to extract parts of a URL, such as the protocol, domain, or path.

const url = "https://www.geeksforgeeks.org/javascript";
console.log(`Total length of the URL : ${url.length}`);
const indexsemi = url.indexOf("/");
const slice1 = url.slice(0, indexsemi);
console.log(slice1);
const indexs = url.indexOf("g");
console.log(indexs);
const slice2 = url.slice(indexsemi, indexs);
console.log(slice2);
const index3 = url.indexOf(".org/");
console.log(index3);
const part3 = url.slice(indexs, index3);
console.log(part3);
const findlast = url.indexOf("javascript");
console.log(findlast);
const part4 = url.slice(index3, findlast);
console.log(part4);
const lastpart = url.slice(findlast);
console.log(lastpart);

const part1 = slice1;
const part2 = slice2;
const partm = part3;
const partn = part4;
const partl = lastpart;


console.log(partm);
console.log(part4);

const combination = part1 + part2 + partm + partn + partl;
console.log(combination);

//String validation
//Substring() can be used in string validation checks, such as checking whether a specific portion of as tring matches a pattern.
let emailof = 'user@example.com';
let domainn = emailof.substring(emailof.indexOf("@") + 1);
console.log(domainn);
let anali = emailof.substring(emailof.indexOf('.') + 1);
console.log(anali);

const myName = 'pagutharivan';
const portion = myName.substring(myName.indexOf("u") + 1);
console.log(portion);

//Removing prefix or suffix

let fName = "report.pdf";
let ext = fName.substring(fName.lastIndexOf('.') + 1);
console.log(ext);

let img = 'pagu.img';
let img1 = 'flowers.pdf';
let img2 = 'photoshop.png';
let img3 = 'webproject.git';

const removeslastI = img.substring(img.lastIndexOf('.') + 1);
const removesImglast1 = img1.substring(img1.indexOf('.') + 1);
const removesImglast2 = img2.substring(img2.indexOf('.') + 1);
const removesImglast3 = img3.substring(img3.indexOf('.') + 1);
console.log(removeslastI);
console.log(removesImglast1);
console.log(removesImglast2);
console.log(removesImglast3);

//Handling Negative indices
//The substring() method does not support negative indices; it converts them to 0, so extraction always starts from the beginning of the string rather than from the end

let test = 'Hello, world';
let res = test.substring(-5, -1);
console.log(res);

//Using only the starting index
//if only the starting index is provided, substring() will return the substring from that index ot the end of the string.

let con = 'Javascript is amazing';
let resu = con.substring(11);
console.log(resu);

const java = 'Javascript is easy';
const resist = java.substring(15, 4);
console.log(resist);
