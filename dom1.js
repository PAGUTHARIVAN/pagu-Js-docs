const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const lists = document.getElementById('lists');
const btnfield = document.getElementById('btn-field');

function attachDeleteListener(button, itemElement, buttonWrapper) {
    button.addEventListener('click', () => {
        itemElement.remove();
        buttonWrapper.remove();
    });
}

const initialItem = document.querySelector('.list');
const initialButtonWrapper = document.querySelector('.btns');
const initialDeleteButton = initialButtonWrapper?.querySelector('.deleteitem');

if (initialDeleteButton && initialItem && initialButtonWrapper) {
    attachDeleteListener(initialDeleteButton, initialItem, initialButtonWrapper);
}

add.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) return;

    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<li>${value}</li>`;
    itemElement.style.marginTop = '5px';
    itemElement.setAttribute('class', 'list');
    lists.appendChild(itemElement);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.marginTop = '5px';
    buttonWrapper.setAttribute('class', 'btns');

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteitem';
    deleteButton.textContent = 'Delete Item';

    attachDeleteListener(deleteButton, itemElement, buttonWrapper);

    buttonWrapper.appendChild(deleteButton);
    btnfield.appendChild(buttonWrapper);
    input.value = '';
});

clear.addEventListener('dblclick', () => {
    input.value = '';
    if (initialItem) {
        initialItem.remove();
    }
    if (initialButtonWrapper) {
        initialButtonWrapper.remove();
    }
});
