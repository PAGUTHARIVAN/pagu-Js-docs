//Javascript arrays

//Finding the primitive value (Numbers);
const numbers = [5, 8, 12, 1, 44];
const firstLargeNumber = numbers.find(num => num > 10);
console.log(firstLargeNumber);

const smallestN = numbers.find(num => num < 12);
console.log(smallestN);

//Finding an Object in an Array
//find() is highly popular for locating objects insidea an array by a unique identifier, such as an ID:

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.id === 2);
console.log(user);

const nameofu = users.find(n => n.id === 3);
console.log(nameofu);

console.log(users[0].name);

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

for (const useri of users) {
    console.log(`${useri.id} : ${useri.name}`);
}

const users2 = [
    { id: 1, name: 'Pagutharivan', phone: 6374995922, email: 'pagu@gmail.com' },
    { id: 2, name: 'MarkAntony', phone: 3885730474, email: 'mark@gmail.com' },
    { id: 3, name: 'JohnCarter', phone: 9938488470, email: 'john@gmail.com' }
];
//Accessing the array of Objects
const usersName = [];
usersName.push(users2[0].name, users2[1].name, users2[2].name);
const userPhone = [];
userPhone.push(users2[0].phone, users2[1].phone, users2[2].phone);
const userEmail = [];
userEmail.push(users2[0].email, users2[1].email, users2[2].email);

for (const [names, phones, emails] of [usersName, userPhone, userEmail]) {
    console.log(`${names} | ${phones} | ${emails}`);
}

const findJohn = users2.find((ui) => ui.name === 'JohnCarter');
console.log(findJohn);

users2.forEach((user) => {
    console.log(`${user.name} is an ${user.phone} and his ${user.email}`);
});

const filtantony = users2.filter(person => person.id === 2);
console.log(filtantony);


const users5 = [
    { id: 1, name: 'Pagutharivan', job: 'Software Developer' },
    { id: 2, name: 'John Wick', job: 'AI Engineer' },
    { id: 3, name: 'Harry Potter', job: 'LLM Developer' },
    { id: 4, name: 'Andrew Garfield', job: 'Full stack Developer' }
];

console.log(users5);

users5.forEach(use => {
    console.log(`${use.name} : ${use.job}`);
});

for (const user of users5) {
    console.log(`${user.name}`);
}

