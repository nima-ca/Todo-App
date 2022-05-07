import styles from "./TaskTitle.module.css";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";
import { panelDataActions } from "../../store/PanelDataSlice";

const TaskTitle = (props) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.data.data);

  const buttonClickHandler = () => {
    dispatch(toggleModalActions.toggleModal("newTask"));
  };

  const ItemClickHandler = (data) => {
    dispatch(panelDataActions.addTask(data));
  };

  return (
    <div className={styles["tasks__items"]}>
      <h2 className={styles.title}>TODO Tasks</h2>
      <div>
        {Data.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            description={item.description}
            onClick={ItemClickHandler}
          />
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
