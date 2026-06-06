function area(height, width) {
    return height * width;
}
console.log(area(100, 100));

const areaSize = (height, width) => {
    return height * width;
}
console.log(areaSize(20,20));

const square = (num) => {
    return num * num;
}
console.log(square(90));

function myFunc(theObject) {
    theObject.make = "Toyota";
}

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);

const array = [];
array[0] = 80;
console.log(array);

const mainFunc = (theArr) => {
    theArr[0] = 100;
}

console.log(array[0]);
mainFunc(array);
console.log(array[0]);


export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

const PI = 3.14159;
export { PI };