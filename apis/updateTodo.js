const updateTodo = async (newData, id) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        if (!res.ok) {
            throw new Error(
                `Failed to update todo. The response status: ${res.status}`,
            );
        }

        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default updateTodo;
