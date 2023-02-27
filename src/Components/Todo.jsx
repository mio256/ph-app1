import { useEffect, useState } from "react"

const Todo = ({content, index, todos, setTodos}) => {
    const [inputText, setInputText] = useState("")
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    const handleAddTodo = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
        if(inputText === "") {
            alert("空文字列は追加できません!!")
        } else {
            setTodos([
                ...newTodos,
                {
                    content: content,
                    detail: inputText,
                }
            ])
        }
        setInputText("")
    }
    return (
        <div>
            <p>{content}</p>
            <button onClick={handleTodoDelete}>完了</button>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={handleAddTodo}>追加</button>
        </div>
    )
}

export default Todo