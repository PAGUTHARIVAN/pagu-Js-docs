const inputFieldWrapper = document.querySelector('.input-field-wrapper');
console.log(inputFieldWrapper.innerHTML);

//input and adding and clearing elements
const input = inputFieldWrapper?.querySelector('#inputlangs');
const inputBtnsWrapper = inputFieldWrapper?.querySelector('.input-btns-wrapper');
//add and delete btns
const addBtn = inputBtnsWrapper?.querySelector('#add-btn');
const clearBtn = inputBtnsWrapper?.querySelector('#clear-field');

//ItemsWrapper
const itemsWrapper = document.querySelector('.items-wrapper');
console.log(itemsWrapper.innerHTML);

//lists
const lists = itemsWrapper?.querySelector('#lists');
const list = itemsWrapper?.querySelector('.list');
const li = itemsWrapper?.querySelector('li');

//delete btnlist 
const deleteBtnList = itemsWrapper?.querySelector('#dbtn-list');
const btn = itemsWrapper?.querySelector('.btn');
const button = itemsWrapper?.querySelector('button');

addBtn.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please Enter some Language!');
        input.value = '';
        return;
    }

    const div = document.createElement('div');
    div.innerHTML = `<li>${input.value}</li>`;
    div.setAttribute('class', 'list');
    lists.appendChild(div);

    const div1 = document.createElement('div');
    div1.innerHTML = `<button>Delete</button>`;
    div1.setAttribute('class', 'btn');
    deleteBtnList.appendChild(div1);

    //deleting the newly added languages
    div1.addEventListener('click', () => {
        div.remove();
        div1.remove();
    });

    clearBtn.addEventListener('click', () => {
        div.remove();
        div1.remove();
    })

    input.value = '';


})

//deleting the default language
button.addEventListener('click', () => {
    button.remove();
    li.remove();
})