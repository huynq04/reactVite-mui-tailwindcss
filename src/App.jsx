import { useState, useCallback } from 'react'
import Content from './content'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const handleCount = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
        <div className="App">
            <Content onIncrease={handleCount} />
            <h1>{count}</h1>
        </div>
    )
}

export default App
