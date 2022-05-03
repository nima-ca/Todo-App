import styles from "./Task.module.css";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";
import { useDispatch } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";

const Dummy_data = [
  { title: "Task 1", status: "Done", id: "task-1" },
  { title: "Task 2", status: "UnDone", id: "task-2" },
  { title: "Task 3", status: "Done", id: "task-3" },
  { title: "Task 4", status: "Done", id: "task-4" },
];

const Task = (props) => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <section className={styles.tasks}>
      <div className={styles["tasks__items"]}>
        <div>
          {Dummy_data.map((item) => (
            <TaskItem key={item.id} title={item.title} status={item.status} />
          ))}
        </div>
        <Button onClick={buttonClickHandler} content={"Add New Task"} />
      </div>
      <div className={styles["tasks__panel"]}></div>
    </section>
  );
};

export default Task;
