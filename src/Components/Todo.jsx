const Todo = ({content}) => {
    const handleAddTodo = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    return (
        <div>
            <p>{content}</p>
            <button onClick={handleAddTodo}>追加</button>
        </div>
    )
}

export default Todo