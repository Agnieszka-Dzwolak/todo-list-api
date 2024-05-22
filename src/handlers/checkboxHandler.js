import updateTodo from '../../apis/updateTodo.js';

const checkboxHandler = async (todoData) => {
    const newData = {
        ...todoData,
        completed: !todoData.completed,
    };

    const id = todoData.id;

    await updateTodo(newData, id);
};

export default checkboxHandler;
