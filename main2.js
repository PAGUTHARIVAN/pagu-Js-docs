import { counter, user, add2, pi, subtract } from './main1.js';

const incrementer = counter();
incrementer();
incrementer();
incrementer();

const { name, age, work, city } = user;
console.log(name);
console.log(age);
console.log(work);
console.log(city);

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}

console.log(add2(10, 20));