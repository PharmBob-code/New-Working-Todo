import styles from "./modules/Footer.module.css";
export default function Footer({ todos, completedTodos }) {
  return (
    <div className={styles.taskContainer}>
      <h3 className={`${styles.task} ${styles.task1}`}>
        Total Task: {todos.length}
      </h3>
      <h3 className={`${styles.task} ${styles.task2}`}>
        Completed Task: {completedTodos}{" "}
      </h3>
    </div>
  );
}
