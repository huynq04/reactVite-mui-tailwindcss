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
