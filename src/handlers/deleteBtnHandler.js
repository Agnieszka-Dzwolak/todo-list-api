import deleteTodo from '../../apis/deleteTodo.js';

const deleteBtnHandler = async (id) => {
    //remove todo from dom
    document.getElementById(id).remove();

    //remove from api
    await deleteTodo(id);
};

export default deleteBtnHandler;
