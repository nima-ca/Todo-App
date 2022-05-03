import styles from "./Task.module.css";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";

const Task = (props) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.data.data);

  const buttonClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <section className={styles.tasks}>
      <div className={styles["tasks__items"]}>
        <div>
          {Data.map((item) => (
            <TaskItem key={item.id} title={item.title} status={item.status} />
          ))}
        </div>
        <Button
          onClick={buttonClickHandler}
          content={"Add New Task"}
          styles="tertiary"
        />
      </div>
      <div className={styles["tasks__panel"]}></div>
    </section>
  );
};

export default Task;
