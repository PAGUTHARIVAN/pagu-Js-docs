const createCounter = () => {
    let count = 0;

    const increment = () => {
        count++;
        return count;
    }

    return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter2());