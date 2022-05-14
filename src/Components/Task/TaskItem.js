import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { id, title, status, description } = props;
  const statusClasses = `${styles.dot} ${
    status ? styles["dot__green"] : styles["dot__red"]
  }`;

  const clickHandler = () => {
    props.onClick({ id, title, status, description });
  };

  return (
    <div className={styles.taskItem} onClick={clickHandler}>
      <p>{title}</p>
      <span className={statusClasses}></span>
    </div>
  );
};

export default TaskItem;
