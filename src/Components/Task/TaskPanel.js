import styles from "./TaskPanel.module.css";
import Delete from "../UI/Icons/delete-svgrepo-com.svg";
import Edit from "../UI/Icons/edit-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";
import CheckBox from "../UI/CheckBox";

const TaskPanel = (props) => {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.data.panelData);

  const deleteModalHandler = () => {
    dispatch(toggleModalActions.toggleModal("deleteTask"));
  };

  const editModalHandler = () => {
    dispatch(toggleModalActions.toggleModal("editTask"));
  };

  if (selectedData.length !== 0) {
    return (
      <div className={styles["tasks__panel"]}>
        <div className={styles.body}>
          <h2 className={styles.header}>TODO Description</h2>
          <div>
            <div className={styles["icon__container"]}>
              <CheckBox id={selectedData[0].id} />
              <div className={styles.icons}>
                <img onClick={deleteModalHandler} src={Delete} alt="" />
                <img onClick={editModalHandler} src={Edit} alt="" />
              </div>
            </div>
            <h3 className={styles.title}>{selectedData[0].title}</h3>
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
