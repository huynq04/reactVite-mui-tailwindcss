## Todo List with useState

```
function App() {
  const [todo, setTodo] = useState('');

  let newTodos;
  let newTodosString;

  // initial state chi chay 1 lan duy nhat khi component duoc render
  const [todos, setTodos] = useState(() => {
    const todosString = localStorage.getItem('todos');
    const arrTodo = JSON.parse(todosString);

    return arrTodo ?? [];
  });

  const handleAdd = () => {
    setTodos((prev) => {
      if (!todo) return prev;

      newTodos = [...prev, todo];

      newTodosString = JSON.stringify(newTodos);
      localStorage.setItem('todos', newTodosString);

      return newTodos;
    });
    setTodo(''); // Reset input
  };

  const removeTodo = (index) => {
    // Phải setTodos thì mới render lại giao diện
    setTodos((prev) => {
      newTodos = prev.filter((todo, i) => i !== index);

      newTodosString = JSON.stringify(newTodos);
      localStorage.setItem('todos', newTodosString);

      return newTodos;
    });
  };
  return (
    <>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

      <button onClick={handleAdd} type="submit">
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ marginRight: 20 }}>{todo}</span>
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

```

## memo and useCallback()

-   Nếu muốn dùng useCallback() ở component cha thì phải dùng 'memo()' ở component con

## useMemo()

-   Để tránh thực hiện lại 1 logic không cần thiết trong function component

## useReducer()

-   useReducer hoạt động giống redux và useState
-   useReducer để xử lí các action phức tạp (thay thế cho useState)

## Todo list with useReducer

```

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

```
