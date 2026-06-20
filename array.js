const arr = [100, 80, 50, 45, 22, 10, 55, 98, 110, 33, 70];
const confirm = Array.isArray(arr);
console.log(confirm);

if (Array.isArray(arr) !== 'object' && Array.isArray(arr) !== null) {
    console.log('Yes this is array');
} else {
    console.log('Nothing');
}
//Arranging the array with ascending order with the help of sort method in JavaScript 
const ascend = arr.sort((a, b) => a - b);
console.log(`The ascending ordered Array : ${ascend}`);