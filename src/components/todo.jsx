export function Todo({ todos, setTodos }) {
  const handleCheckbox = (id) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      })
    );

  const handleDelete = () => {};

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            defaultChecked={todo.isDone}
            onChange={() => handleCheckbox(todo.id)}
          ></input>
          <p className={todo.isDone ? "line-through" : ""}>{todo.text}</p>
          <button></button>
          {todo.isDone && <button onClick={handleDelete}>delete</button>}
        </div>
      ))}
    </div>
  );
}
