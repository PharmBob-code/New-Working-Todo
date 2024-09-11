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
        setTodos([...todos, todo]); //this updates the todos array which was initally set to empty, and then populates it each time a new todo is added, while also spreading the previous todos in that array and adding the new todo to the end of the array.
        setTodo({ name: "", done: false }); //this updates the input field by resetting it back to default useState.
        localStorage.setItem("todos", JSON.stringify([...todos, todo])); //this saves the updated todos array to local storage.
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
