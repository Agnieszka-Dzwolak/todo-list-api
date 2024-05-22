const deleteTodo = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error(
                `Failed to delete todo. The response status: ${res.status}`,
            );
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default deleteTodo;
