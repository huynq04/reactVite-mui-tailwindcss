import Content from './content'
import './App.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function App() {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <button onClick={toggleTheme}>toggle Theme</button>
            <Content />
        </div>
    )
}

export default App
