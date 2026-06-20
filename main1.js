export const counter = () => {
    let count = 0;

    const inner = () => {
        count++;
        console.log(count);
    }
    return inner;
};

export const user = {
    name: 'pagu',
    age: 21,
    work: 'softwareEngineer',
    city: 'Berlin'
};

const pi = 3.14159;

function add2(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { pi, add2, subtract };