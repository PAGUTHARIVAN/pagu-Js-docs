const add = document.getElementById('add');

console.log(add);

add.addEventListener('click', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'container');
    div.textContent = 'Hello';
    div.style.backgroundColor = 'yellow';
    div.style.padding = '10px 20px'
    div.style.margin = '10px';
    document.body.appendChild(div);

});