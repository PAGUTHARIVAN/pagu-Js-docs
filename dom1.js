const add = document.getElementById('add');
const container = document.querySelector('#container');
console.log(add);

add.addEventListener('click', () => {
    //create element
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello';
    h1.style.backgroundColor = 'yellow';
    container.append(h1); 

});