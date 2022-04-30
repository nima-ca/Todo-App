import styles from "./Task.module.css";

const Task = (props) => {
  return (
    <section className={styles.tasks}>
      <div className={styles["tasks__items"]}></div>
      <div className={styles["tasks__panel"]}></div>
    </section>
  );
};

export default Task;
