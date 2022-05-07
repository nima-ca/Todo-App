import styles from "./TaskPanel.module.css";
import SwitchButton from "../UI/SwitchButton";
import Delete from "../UI/Icons/delete-svgrepo-com.svg";
import Edit from "../UI/Icons/edit-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";

const TaskPanel = (props) => {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.data.panelData);

  const modalToggleHandler = () => {
    dispatch(toggleModalActions.toggleModal("deleteTask"));
    dispatch(toggleModalActions.idCatch(selectedData[0].id));
  };

  if (selectedData.length !== 0) {
    return (
      <div className={styles["tasks__panel"]}>
        <div className={styles.body}>
          <h2 className={styles.header}>TODO Description</h2>
          <div>
            <div className={styles.title}>
              <h3>{selectedData[0].title}</h3>
              <div className={styles.icons}>
                <SwitchButton />
                <img onClick={modalToggleHandler} src={Delete} alt="" />
                <img src={Edit} alt="" />
              </div>
            </div>
            <p className={styles.content}>{selectedData[0].description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["tasks__panel"]}>
        <div className={styles.body}>
          <h2 className={styles.header}>TODO Description</h2>
          <p>No task Selected!</p>
        </div>
      </div>
    );
  }
};

export default TaskPanel;
