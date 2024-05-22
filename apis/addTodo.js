const addTodo = async (newData) => {
    try {
        const res = await fetch(`http://localhost:3000/todos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        if (!res.ok) {
            throw new Error(
                `Failed to add new todo with status: ${res.status}`,
            );
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default addTodo;
