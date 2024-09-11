import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import styles from "./modules/Todo.module.css";
import Footer from "./Footer";

export default function Todo() {
  const [msg, setMsg] = useState("What will you be doing today?");
  const [todos, setTodos] = useState([]);
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const completedTodos = storedTodos.filter((status) => status.done).length;

  return (
    <>
      <div className={styles.todoContainer}>
        <Form
          todos={storedTodos}
          setTodos={setTodos}
          msg={msg}
          setMsg={setMsg}
        />
        <TodoList todos={storedTodos} setTodos={setTodos} msg={msg} />
        <Footer completedTodos={completedTodos} todos={storedTodos} />
      </div>
    </>
  );
}
