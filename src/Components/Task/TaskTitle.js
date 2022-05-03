import styles from "./TaskTitle.module.css";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";

const TaskTitle = (props) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.data.data);

  const buttonClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <div className={styles["tasks__items"]}>
      <h2 className={styles.title}>TODO Tasks</h2>
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
  );
};

export default TaskTitle;
