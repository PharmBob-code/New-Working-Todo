import styles from "./modules/TodoItem.module.css";
export default function TodoItem({ item, todos, setTodos, id }) {
  function handleDelete(id) {
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function handleStatus(id) {
    const newTodos = todos.map((item, ind) => {
      return ind === id ? { ...item, done: !item.done } : item;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  const strikethrough = item.done ? styles.strikethrough : "";

  // Extract the text content from the item

  return (
    <div className={styles.todoItem}>
      <h3 className={strikethrough} onClick={() => handleStatus(id)}>
        {item.name}
      </h3>
      <h3
        className={`${styles.deleteX} ${strikethrough}`}
        onClick={() => handleDelete(id)}
      >
        x
      </h3>
    </div>
  );
}
