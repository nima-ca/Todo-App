import styles from "./Task.module.css";
import TaskTitle from "./TaskTitle";
import TaskPanel from "./TaskPanel";

const Task = (props) => {
  return (
    <section className={styles.tasks}>
      <TaskTitle />
      <TaskPanel />
    </section>
  );
};

export default Task;
