import { useState, useCallback, useMemo, useRef, useEffect, useReducer } from 'react'
import Content from './content'
import './App.css'

// init state
const initState = 0

// action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// reducer function
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Unexpected action')
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initState)
    // useReducer co the co 3 tham so, tham so thu 3 la init state

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}> Down</button>
        </div>
    )
}

export default App
