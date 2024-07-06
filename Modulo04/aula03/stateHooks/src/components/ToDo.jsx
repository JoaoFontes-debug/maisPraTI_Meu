import { useState } from "react";

function TodoList(){
    const[toDos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        setTodos([...toDos, inputValue])
        setInputValue('');
    }

    return (
        <div>
            <input type="text" value = {inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <button onClick={addTodo}>Adicionar Tarefa</button>

            <ul>
                {toDos.map((todo, index) => (
                    <li key={index}>{todo} </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;