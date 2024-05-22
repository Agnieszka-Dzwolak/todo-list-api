const getTodos = async () => {
    try {
        const res = await fetch('http://localhost:3000/todos');
        if (!res.ok) {
            throw new Error(
                `Cannot fetch data. The response status: ${res.status}`,
            );
        }
        const todos = await res.json();

        return todos;
    } catch (err) {
        console.error(err);
    }
};

export default getTodos;
