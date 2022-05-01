import styles from "./Task.module.css";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";

const Dummy_data = [
  { title: "Task 1", status: "Done", id: "task-1" },
  { title: "Task 2", status: "UnDone", id: "task-2" },
  { title: "Task 3", status: "Done", id: "task-3" },
  { title: "Task 4", status: "Done", id: "task-4" },
];

const Task = (props) => {
  return (
    <section className={styles.tasks}>
      <div className={styles["tasks__items"]}>
        <div>
          {Dummy_data.map((item) => (
            <TaskItem key={item.id} title={item.title} status={item.status} />
          ))}
        </div>
        <Button content={"Add New Task"} />
      </div>
      <div className={styles["tasks__panel"]}></div>
    </section>
  );
};

export default Task;
