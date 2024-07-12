const buttom = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');


buttom.addEventListener('click', () => {
    const li = document.createElement('li');
    const createBtn = document.createElement('button');
    li.className = 'todo-item';
    createBtn.innerText = 'Delete';
    createBtn.className = 'delete-btn';
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(createBtn);
    input.value = '';

    createBtn.addEventListener('click', () => {
        list.removeChild(li);
    })
})