import { useState, useCallback, useMemo, useRef, useEffect, useReducer } from 'react'
import Content from './content'
import './App.css'

// init state
const initState = {
    job: '',
    jobList: [],
}

// action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const actionJob = (payload, type) => {
    return {
        type,
        payload, // payload la data truyen vao
    }
}

const reducer = (state, action) => {
    console.log('state', state)
    console.log('action', action)

    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            }
        case ADD_JOB:
            return {
                ...state,
                jobList: [...state.jobList, action.payload],
            }

        case DELETE_JOB:
            // return chinh la state moi
            return {
                ...state,
                jobList: state.jobList.filter((job, index) => index !== action.payload),
            }
        default:
            throw new Error('Invalid action type')
    }
}

// reducer function

function App() {
    const [state, dispatch] = useReducer(reducer, initState)

    const { job, jobList } = state

    const handleAddJob = () => {
        dispatch(actionJob(job, ADD_JOB))
        dispatch(actionJob('', SET_JOB))
    }

    return (
        <div>
            <input
                value={job}
                type="text"
                placeholder="Enter Job"
                onChange={(e) => dispatch(actionJob(e.target.value, SET_JOB))}
            />

            <button onClick={handleAddJob}>Add</button>

            <ul>
                {jobList.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span style={{ marginLeft: 10 }} onClick={() => dispatch(actionJob(index, DELETE_JOB))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
