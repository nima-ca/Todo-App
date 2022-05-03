import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { title, status } = props;

  const statusClasses = `${styles.dot} ${
    status === "Done" ? styles["dot__green"] : styles["dot__red"]
  }`;

  return (
    <div className={styles.taskItem}>
      <p>{title}</p>
      <span className={statusClasses}></span>
    </div>
  );
};

export default TaskItem;
