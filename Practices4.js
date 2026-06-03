
//Object destructuring

const destroy = {
    name: 'pagu',
    age: 21,
    location: 'Washington Dc',
    skills: ["Python", "Kotlin", "Java"]
};

const { name, age, location, skills } = destroy;
console.log(name);
console.log(age);

console.log(Object.hasOwn(destroy, ["age"]));
console.log(Object.hasOwn(destroy, ["name"]));
console.log(Array.isArray(destroy.skills));

const objectMain = {
    name: 'pagutharivan',
    age: 21,
    location: "NewYork"
};

const objectNewOne = {
    ...objectMain
};

console.log(objectNewOne);

const objectWithRest = {
    ...objectNewOne
};
console.log(objectWithRest);
