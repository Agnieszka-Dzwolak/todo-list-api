import dom from '../dom.js';
import createTodo from '../components/createTodo.js';
import addTodo from '../../apis/addTodo.js';

const addHandler = async () => {
    const value = dom.input.value.trim();

    //dom
    if (!value) {
        dom.error.innerText = `Input cannot be empty`;
        dom.error.classList.add('error');

        setTimeout(() => {
            dom.error.innerText = '';
            dom.error.classList.remove('error');
        }, 2000);
    } else {
        const newData = {
            title: value,
            completed: false,
        };
        // const newDom = createTodo(newData);
        // dom.list.append(newDom);

        //api
        await addTodo(newData);
    }
};

export default addHandler;
