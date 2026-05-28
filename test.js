function sayHello() {
    return "Hello World!";
}
console.log(sayHello());

function greet() {
    return "Welcome to JavaScript!";
}
let greeting = greet();
console.log(greeting);

function add(a, b) {
    return a + b;

}
console.log(add(5, 10));

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
let value = toCelsius(100);
console.log(value);

//JavaScript arrays
//An array in JavaScript is an ordered collection of values, each identified by a numeric index. The values in a JavaScript array can be of different data types, including numbers, strings, booleans, objects, and event other arrays.
let fruits = ["apple", "banana", "orange"];
console.log(fruits.push("lemon"));
console.log(fruits[0]); // output: apple
console.log(fruits[1]); //output : banana
console.log(fruits[2]);//output : orange
console.log(fruits[3]); //output : lemon

fruits[1] = "Mango"; //output: Mango
console.log(fruits.length);

fruits[4] = "Pomegranate"; //output : Pomegranate
console.log(fruits.length);

fruits[5] = "Grapes"; //output: Grapes
fruits[6] = "Watermelon"; //output: watermelon
console.log(`Total length of the array we created is = ${fruits.length}`);

//How do you add and remove elements from the beginning and end of an Array?
//Arrays in JavaScript are dynamic, whic means you can easily add or remove elements from them. There are four main methods for adding and removing elements from the beginning and end of an array: push(), pop(), shift(), and unshift().

//1.Push method is used to add one or more elements to the end of an array.
const fruits1 = ["apple", "banana"];
const newLength = fruits1.push("orange");
console.log(`The total length of the array is: ${newLength}`);
 //output : 3

 //2. The pop() method removes the last element from an array and returns that element. It also modifies the original array;
let fruits2 = ["apple", "banana", "orange"];
let lastFruit = fruits2.pop();
console.log(fruits2);
console.log(lastFruit); //output : orange

//3, Unshift() method adds one or more elements to the beginniing of an array and returns it new length. It works similarly to push(), but modifies the start of the array instead of the end.
let numbers = [2, 3, 4];
let newLength1 = numbers.unshift(1);
console.log(numbers);
console.log(newLength1); //output : 4

let sentences = ["are", "you"];
let lengthOfSentences = sentences.length;
console.log(lengthOfSentences);

let before = sentences.unshift("how");
let newLength3 = sentences.length;
console.log(newLength3); ///

console.log(sentences);

const numbers1 = [200, 300, 400, 500, 600, 700, 800];
console.log(numbers1.length); //output : 7

const addHundredBefore = numbers1.unshift(100);
console.log(numbers1.length);
console.log(numbers1);

//4. The shift() method removes the first element from an array and returns that element. It's similar to pop(), but it works at the beginning of the array instead of the end.
let languages = ["c++", "Java", "Python", "JavaScript"];
let firstLanguage = languages.shift();
console.log(languages);
console.log(firstLanguage); //output : C++

//Note that while push() and Unshift() can add multiple elements at once, pop() and shift() remove only one element at a time.
//Array review
let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); //output : 5
console.log(myArray[0]); //output : 1
console.log(myArray[1]); //output ; 2
console.log(myArray[2]); //output : 3
console.log(myArray[3]); //output : 4
console.log(myArray[4]); //output : 5
console.log(myArray);

let testPush = myArray.push(6);
console.log(myArray);
console.log(testPush);
console.log(`The total Length of the Pushed array is : ${myArray.length}`);

let testPop = myArray.pop();
console.log(myArray);
console.log(`The popped(removed) element is : ${testPop}`);
console.log(`The total Length of the Popped array is : ${myArray.length}`);

let testUnshift = myArray.unshift(0);
console.log(myArray);
console.log(`The total Length of the Unshifted array is : ${myArray.length}`);

let testShift = myArray.shift();
console.log(myArray);
console.log(`The shifted(removed) element is : ${testShift}`);
console.log(`The total Length of the Shifted array is : ${myArray.length}`);

//arrays of arrays
let arrayOfArrays = [
                ["A", "B", "C", "D", "E"],
                ["F", "G", "H", "I", "J"],
                ["K", "L", "M", "N", "O"],
                ["P", "Q", "R", "S", "T"],
                ["U", "V", "W", "X", "Y"]
];
console.log(arrayOfArrays);
console.log(arrayOfArrays[2][3]); //output: N;

//Basic array destructuring
let tools = ["hammer", "screwdriver", "wrench"];
let [tool1, tool2, tool3] = tools;
console.log(tool2); //output : screwdriver
console.log(tool3); //output : wrench
console.log(tool1); //output : hammer

let daysss = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let [day1, day2, ...rest] = daysss;
console.log(day1, day2, rest);

//The String and Array Methods to Reverse a String
//Reversing a string is common programming task that can be accomplished in JavaScript using a combination of string and array methods. The process involves three main steps:
// * Splittting the string into an array of characters
// * Reversing the array.
// * Joining the characters back into a string.

let mainString = "Pagutharivan";
let charArray = mainString.split(""); //Use to create an array of characters
console.log(charArray);
charArray.reverse();
console.log(charArray);
let reversedString = charArray.join("");
console.log(reversedString);
console.log(reversedString.split("").reverse().join(""));

//Indexing the arrays
let fruits10 = ["apple", "banana", "Orange", "Mango"];
let index = fruits10.indexOf("pappaya");
console.log(index);

let colors = ["red", "green", "blue", "yellow", "green"];
let indexOfColors = colors.indexOf("green", 3);
console.log(indexOfColors);

//removing the elements from the middle of the array
let programms = ["JavaScript", "Python", "Java", "C++", "Rust", "Golang", "Ruby"];
let programmsLength = programms.length;
console.log(`Total Length of the array is : ${programmsLength}`);
let removedElements = programms.splice(1, 4);
console.log(`The removed elements from the array are: ${removedElements}`);
console.log(`The remains : ${programms}`);

let colors2 = ["red", "green", "blue"];
colors2.splice(1, 0, "yellow", "purple");
console.log(colors2);

let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(3, 2, 6, 7, 8);
console.log(numbers4);

let numbers5 = [1, 2, 3, 4, 5, 6];
let removessss = numbers5.splice(1, 4, 9, 10, 11, 12);
console.log(numbers5);
console.log(removessss);

let numbers6 = [1, 2, 3, 4, 5, 6];
let addss = numbers6.splice(1, 0, 9, 10, 11, 12);
console.log(numbers6);
console.log(addss);

let originalA = [1, 2, 3, 4, 5];
let copy = [...originalA];
copy.splice(2, 1, 6);

console.log(originalA);
console.log(copy);

let containers = ["box", "bag", "bottle", "can"];
let findone = containers.indexOf("bottle");
console.log(findone); //ouput : 2

if (findone !== -1) {
    containers.splice(findone, 1);
}
console.log(containers);

 //JavaScript arrays Basics
 //A javascruot array is an ordered collection of values, each identified by a numeric index> The values in a JavaScript array can be of different data types, including numbers, strings, booleans, objects, and even other arrays Arrays are contiguous in memory, which means that all elements are stored in a single, continuous block of memory locations, allowing for efficient indexing and fast access to elements by their index.

 const arr = ["apple", "banana", "cherry", "date"];
 const sliceArr = arr.slice(1, 3);
    console.log(sliceArr);

let arrr = [];
arrr.shift();
console.log(arrr);

//JavaScript Arrays Review//
//Creating an array
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(myArr);
//Accessing elements in an array
console.log(myArr[0]);
let accessRemovedLast = myArr.pop();
let accessRemovedFirst = myArr.shift();
console.log(`This is removed from the array : ${accessRemovedFirst}`);
console.log(`This is removed from the array : ${accessRemovedLast}`);
console.log(myArr);

let accessAddedLast = myArr.push(21, 22, 23, 24, 25);
console.log(accessAddedLast);
console.log(myArr);
console.log(myArr.length);

let emptyArr = myArr.slice();
console.log(emptyArr);
console.log(myArr);

let strngArr = ["Hello", "World", "JavaScript", "Arrays"];
let strngRem = strngArr.splice(2, 1, "Python");
let strngRem2 = strngArr.splice(0, 1, "Welcome");
let addMore = strngArr.splice(0, 0, "Hi", "How", "are", "You");
console.log(strngRem2);
console.log(strngRem);
console.log(strngArr);

let copyArr = [...strngArr];
console.log(copyArr);
let slicingCopy = strngArr.slice();
console.log(slicingCopy);
let mergeArr = [].concat(strngArr);
console.log(mergeArr);

let analyse = copyArr.indexOf("Python") !== -1;
console.log(analyse); //output : true

let watchArr = copyArr.includes("World");
console.log(watchArr);

strngArr.unshift("God is great");
console.log(strngArr);

