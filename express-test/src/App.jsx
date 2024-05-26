import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function getTodo() {
      const res = await fetch("http://localhost:3000/todo");
      const jsonRes = await res.json();

      setTodo(jsonRes);
    }

    getTodo();
  }, []);

  return (
    <>
      {todo.map((todoItem) => (
        <h1
          key={todoItem.title}
          style={{ color: todoItem.done ? "green" : "white" }}
        >
          {todoItem.title}
        </h1>
      ))}
    </>
  );
}

export default App;
