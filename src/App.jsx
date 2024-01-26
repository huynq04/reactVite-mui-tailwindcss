import { useEffect } from 'react'
import { useStore } from './store'
import { actions } from './store'

import './App.css'

function App() {
    const [state, dispatch] = useStore()

    const { todoList, todoInput } = state

    const handleAddTodo = () => {
        dispatch(actions.addTodo(todoInput))
    }

    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    return (
        <div>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />

            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
