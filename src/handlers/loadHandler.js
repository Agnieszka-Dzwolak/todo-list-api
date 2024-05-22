import dom from '../dom.js';
import createTodo from '../components/createTodo.js';

import getTodos from '../../apis/getTodos.js';

const loadHandler = async () => {
    //fetch todos
    const todos = await getTodos();

    //render todos
    todos.forEach((todoData) => {
        const todoDom = createTodo(todoData);

        dom.list.prepend(todoDom);
    });
};

export default loadHandler;
