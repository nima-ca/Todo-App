import styles from "./Task.module.css";
import Button from "../UI/Button";

const Task = (props) => {
  return (
    <section className={styles.tasks}>
      <div className={styles["tasks__items"]}>
        <div></div>
        <Button content={"Add New Task"} />
      </div>
      <div className={styles["tasks__panel"]}></div>
    </section>
  );
};

export default Task;
