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

const person6 = {
    name: "William",
    age: 35
};
console.log(person6.hasOwnProperty("name"));
console.log(person6.hasOwnProperty("Job"));

const person7 = {
    name: "Emily",
    age: 28
};
console.log(person7.hasOwnProperty("Job"));
console.log(person7.hasOwnProperty("name"));
//hasownmethod
console.log(Object.hasOwn(person7, "name"));
console.log(Object.hasOwn(person7, "Job"));

const user = {
    username: "coder123",
    score: 0,
    isActive: false,
    nickname: null
};
console.log(Object.hasOwn(user, "score"));
console.log(Object.hasOwn(user, "isActive"));
console.log(Object.hasOwn(user, "nickname"));
console.log(Object.hasOwn(user, "email"));

if (user.score) {
    console.log("Has score");
} 
if (Object.hasOwn(user, "score")) {
    console.log("Has score:", user.score);
}

//Another way to check of rht existence of a property in an object is to use the in operator. like hasOwnProperty(), the in operatro will return true if the property exists on the object. 
const person8 = {
    name: "bob",
    age: 40
};
console.log("name" in person8);
console.log("Job" in person8);
console.log("tostring" in person8);

const person9 = {
    name: "harry",
    age: 30,
    job: "developer"
};

console.log("name" in person9);
console.log(Object.hasOwn(person9, "job"));

//How do you wrok with accessing properties from nested objects and arrays in objects?
//When working with javascript, uou'll often encuouter complex data structures that invlove nested objects and arrays within objects. THes structures can represent rich, hierarchical data, and they also require careful handling when accessing their properties.

const person10 = {
    name: "Peter",
    age: 30,
    contact: {
        email: "peter@example.com",
        phone: {
            home: "123-456-7890",
            work: "987-654-3210"
        }
    }
};
console.log(person10.contact.phone.work);
console.log(person10.contact.email);
console.log(person10.contact.phone.home);

//You can also use bracket notation to access nested properties, which is especially.

console.log(person10["contact"]["phone"]["work"]);

//Primitive data types are the simplest form of data in JavaScript. They include number, bigint, string, boolean, null, undefined, and symbol. These types are called "primitive" because they represent single values and are not objects.

let num1 = 10;
let num2 = num1;
num1 = 20;
console.log(num2);

//non-primitive data types, such as objects and arrays, are more complex and can store multiple values. When you assign a non-primitive value to a variable, you're actually assigning a reference to that value in memory. This means that if you change the value through one variable, it will affect all variables that reference the same object.
const originalPerson = {name: "Alan", age: 30};
const copiedPerson = originalPerson;
copiedPerson.age = 35;
console.log(originalPerson.age); //output: 35

//function - are the resuable blocks of code that perform a specific task.
function greett(name11) {
    return "Hello, " + name11 + "!";
}
console.log(greett("Alice"));
console.log(greett("Parker"));

//Objects methods, on the other hand, are function that are associated with an object. They are defined as properties of an object and can access and manipulate the object's data. Here's an example of an object with a method:
const person11 = {
    name: "Andrew",
    age: 40,
    sayHello: function() {
        return "Hello, my name is " + this.name + " and my age is " + this.age + "Years old!";
    }
};
console.log(person11.sayHello());

const user1 = {
    username1: "Alex",
    age: 50,
    city: "China",
    sayWords: function() {
        return "Hey guys, He is " + this.username1 + " and he is coming from " + this.city;
    }
};
console.log(user1.sayWords());

//object constructor
const num10 = 42;
const numObj = Object(num10);

console.log(num10);
console.log(numObj);
console.log(typeof numObj);

const newObj = new Object(undefined);
console.log(newObj);


function toObject(value) {
if (value === null || value === undefined) {
    return {};
}
if (typeof value === "object") {
    return value;
}

return Object(value);

}

console.log(toObject(null));
console.log(toObject(true));
console.log(toObject([1, 2, 3,]));

