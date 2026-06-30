const input = document?.querySelector('#input');
const add = document?.querySelector('#add');
const clear = document?.querySelector('#clear');

const listItems = document?.querySelector('.list-items');
const list = document?.querySelector('.list');
const li = document?.querySelector('li');
const dele = document?.querySelector('#dele');

//creations
add.addEventListener("click", () => {

    if (input.value === "") {
        return;
    }

    const div = document.createElement('div');
    div.innerHTML = `<li>${input.value}</li><button id = "dele"><i class="fa-solid fa-delete-left"></i></button>`;
    div.setAttribute('class', 'list');
    listItems.appendChild(div);

    div.addEventListener("click", () => {
        div.remove();
        dele.remove();

    })

    input.value = "";
    

});

dele.addEventListener("click", () => {
    list.remove();
    dele.remove();
});

clear.addEventListener("click", () => {
    listItems.innerHTML ="";
});


