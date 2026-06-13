const numbers = [100, 200, 300, 400, 500];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const adding = doubled.map((element) => {
    console.log("Element:", element);
    return element * 2;
});

const newd = doubled.map((element, index) => {
    console.log("Element:", element);
    console.log("Index:", index);
    return element * 2;
});

const numbers1 = [100, 200, 300, 400, 500].map((element, index) => {
    console.log("Element:", element);
    console.log("Index:", index);
    return element * 2;

})

//The third argument is the array where map is being called on
const nums1 = [10, 20, 30, 40, 50, 60].map((element, index, array) => {
    console.log("Element:", element);
    console.log("Index:", index);
    console.log("Array:", array);
    return element * 2;
});

//Filter method
//The filter method is used to create a new array with elements that pass a specified test, making it useful for selectively extracting items based on criteria

//In this example, we are using the filter method,, to create a new array of only even numbers:
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers5.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers6.filter((num) => num % 2 === 1);
console.log(oddNumbers);

const numbers7 = [2, 4, 6, 8, 10].filter((num) => num % 2);
console.log(numbers7);
const numbers8 = [1, 3, 5, 7, 9].filter((num) => num % 1);
console.log(numbers8);

//Removing the younger peoples from the array of objects
 const developers = [
    { name: "Alice", age: 25, job: "SoftwareDeveloper" },
    { name: "Bob", age: 30, job: "SoftwareDeveloper" },
    { name: "Charlie", age: 35, job: "Data Analyst" },
    { name: "David", age: 25, job: "Software Engineer" }
 ];

 const youngPeople = developers.filter((person) => person.age < 30);
 console.log(youngPeople);

 const sameAgePeople = developers.filter((person) => person.age === 25);
 console.log(sameAgePeople);

 const sameJobRole = developers.filter((person) => person.job === "SoftwareDeveloper");
 console.log(sameJobRole);

 //What is the Reduce Method, and How does it work?
 /* The reduce method is a function in JavaScript that allows you to process an array and condense it into a single value. This single value can be a number, a string, an object, or even another array.
 
 It's called reduce beaxuse it reduces an array to s single outpu. While it might seem complicated at first understanding reduce can greatly simplify your code in many situations.
 
 At its core reduce works by applying a function to each element in the order, passing the result of each calculation on to the next. This function is often called the reducer function.
 
 The reducer function takes two main parameters: an accumulator and the current value. The accumulator is where you stre the running result of your operation, and the current value is the array element being processed.
 */

const numberss = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    0
);

console.log(sum);

const numericals = [10, 20, 30, 40, 50];
const sums = numericals.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
);
console.log(sums);

//What is Method Chaining, and How Does it work?
/* Nethod chaining is a technique where you call several methods one after. You can use method chaining on many types of values in JavaScript including strings, arrays, and objects. Even though strings are primitive values, JavaScript temporarily wraps them in a string object when you use a string method.*/

//Using string methods
const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result);

const rever = "  pagutharivan  "
  .trim()
  .toUpperCase()
  .split("")
  .reverse()
  .join("")
console.log(rever);

const reverAgain = rever
  .split("")
  .reverse()
  .join("")
  .toLowerCase()
console.log(reverAgain);

const numsi = "  1 23 4567  89 10"
  .trim()
  .split("")
  .join("")
console.log(numsi);

let myName = "pagutharivan";
let firstL = myName.charAt(0).toUpperCase();
let remove = myName.slice(1);
console.log(remove);
console.log(firstL);

let combine = firstL + remove;
console.log(combine);

const transactions = [
    { amount: 100, type: "credit" },
    { amount: 20, type: "cash" },
    { amount: 150, type: "credit" },
    { amount: 50, type: "cash" },
    { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
 .filter((transaction) => transaction.type === "credit")
 .map((transaction) => transaction.amount * 1.1)
 .reduce((sum, amount) => sum + amount, 0)

console.log(totalCreditWithBonus);

const calculator = {
    total: 0,
    add(n) {
        this.total += n;
        return this;
    },

    multiply(n) {
        this.total *= n;
        return this;
    },

    subtract(n) {
        this.total -= n;
        return this;
    },

    getResult() {
        return this.total;
    }
};

const result8 = calculator.add(5).multiply(2).subtract(3).getResult();
console.log(result8);

//How does the sort method work?
//There are many different ways to sort your data in programming. In this lesson, we will focus on the built-in sort method in JavaScript. The sort method is used to arrange the elements of an array and returns a reference to the sorted array. No copy is made because the elements are sorted in place.

const fruits = ["Banana", "Orange", "Apple", "Grapes"];
fruits.sort();

console.log(fruits);

const numbersof = [414, 200, 5, 10, 3];
numbersof.sort();
console.log(numbersof);