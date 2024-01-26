import { SET_TODO_INPUT, ADD_TODO } from './Constants'

const initState = {
    todoList: [],
    todoInput: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            }

        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            }
    }
    return state
}

export { initState }
export default reducer
