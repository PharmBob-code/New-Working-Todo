import { useState, useEffect } from "react";
import styles from "./modules/Form.module.css";

export default function Form({ todos, setTodos, msg, setMsg }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  useEffect(() => {
    handleMsg();
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() !== "") {
      if (
        todos.some((item) => item.name === todo.name && item.done === false)
      ) {
        alert("This task already exists!");
      } else {
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
        localStorage.setItem("todos", JSON.stringify([...todos, todo]));
      }
    } else {
      alert("Please enter a task");
    }
  }

  function handleMsg() {
    if (todos.length === 0) {
      setMsg("What will you be doing today?");
    } else {
      setMsg("");
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        value={todo.name}
        type="text"
        placeholder="Add a new task...."
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
