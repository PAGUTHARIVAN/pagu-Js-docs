//Hello world//
console.log("Hello world!");

//JavaScript Objects//
//In JavaScript, an object is a fundamental data structure that allows you to store and organize relate data and funcitonality

const exampleObject = {
    propertyName: "value",
}
console.log(exampleObject);
/* Objects are incredibly versatile and form the backbone of JavaScript in fact, almost everything in JavaScript is an object or can be treated as one. This includes arrays, functions, and even primitive data types like strings and numbers when used in certain ways.

This object-centric nature of JavaScript is one of the reasons it's such a flexible and powerful language. Let's look at how you can create an object:*/

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

const oddObject = {
    "1stProperty": "Hello",
    "Property with spaces": "World"
};
console.log(oddObject["1stProperty"]);
console.log(oddObject["Property with spaces"]);

console.log(oddObject["Property with spaces"]);

//Another advantage of bracket notation is that it allows you to use variables to access properties dynamically.
const person1 = {
    name: "John",
    age: 30,
    city: "New jersey"
}
let propertyName = "name";
console.log(person1[propertyName]);

const person2 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
};
let propertyName2 = "name";
let propertyAge2 = "age";
let propertyCity2 = "city";
console.log(`Name: ${person2[propertyName2]}`);
console.log(`Age: ${person2[propertyAge2]}`);
console.log(`City: ${person2[propertyCity2]}`);

//How can you remove properties form an object?
//There are several ways to remove properties from an object, with the delete operator being the most straightforward and commonly used method.
//Delete operator in objects
const person3 = {
    name: "Bob",
    age: 40,
    Job: "Engineer"
};

delete person3.age;
console.log(person3.age); //Output: Undefined
console.log(person3);

//Another way to remove properties from an object is by using the destructuring assignment with rest parameters
const person5 = {
    name: "Bob",
    age: 40,
    job: "Designer",
    City: "Chicage"
};
const {job, City, ...remainingProperties} = person5;
console.log(remainingProperties);

//In JavaScript, there are several ways to check if an object has a specific property. Understanding these methods is important for working effectively with objects, especially when you're dealing with data from external sources or when you need to ensure certain properties exist before using them.
console.log("Hello world!");