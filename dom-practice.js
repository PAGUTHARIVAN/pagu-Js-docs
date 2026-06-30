const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');

const lists = document.querySelector('.lists');

lists.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.delete-btn');

    if (deleteButton) {
        deleteButton.closest('.list').remove();
    }
});

add.addEventListener("click", () => {
    const div = document.createElement('div');
    div.innerHTML = `
        <li>${input.value}</li>
        <button class="delete-btn" type="button" aria-label="Delete item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
fill="currentColor" viewBox="0 0 24 24">
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M20 4H8.51c-.64 0-1.25.31-1.63.84l-4.7 6.58a.99.99 0 0 0 0 1.16l4.7 6.58c.37.52.98.84 1.63.84H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H8.51l-4.29-6 4.29-6H20z"></path><path d="m9.79 9.21 2.8 2.79-2.8 2.79 1.42 1.42 2.79-2.8 2.79 2.8 1.42-1.42-2.8-2.79 2.8-2.79-1.42-1.42-2.79 2.8-2.79-2.8z"></path>
</svg>
        </button>
    `;
    div.setAttribute('class', 'list');
    lists.appendChild(div);
});