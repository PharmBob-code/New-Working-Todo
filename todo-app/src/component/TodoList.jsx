import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./modules/TodoList.module.css";
export default function TodoList({ todos, setTodos, msg }) {
  const sortedTodos = todos
    .slice() //The slice method will hep us create a copy of the todos so that we don't distrupt the original todos then we will sort through the slice one
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.todoList}>
      {sortedTodos.map((item, id) => {
        return (
          <TodoItem
            item={item}
            key={id}
            id={id}
            todos={sortedTodos}
            setTodos={setTodos}
          />
        );
      })}

      <p>{msg}</p>
    </div>
  );
}
