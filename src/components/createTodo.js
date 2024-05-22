import checkboxHandler from '../handlers/checkboxHandler.js';
import deleteBtnHandler from '../handlers/deleteBtnHandler.js';

const createTodo = (todoData) => {
    //container
    const container = document.createElement('div');
    container.classList.add('todo');
    container.id = todoData.id;

    // items
    const item = document.createElement('h3');
    item.classList.add('item');
    item.innerText = todoData.title;

    //checkbox and btn container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    //checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoData.completed;
    checkbox.classList.add('checkbox');

    checkbox.addEventListener('change', () => {
        checkboxHandler(todoData);
    });

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () => {
        deleteBtnHandler(todoData.id);
    });

    btnContainer.append(checkbox, deleteBtn);
    container.append(item, btnContainer);
    return container;
};

export default createTodo;
