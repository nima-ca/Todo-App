import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button";
import styles from "./TaskFunctionsStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataHandlerActions } from "../../store/DataHandlerSlice";
import { toggleModalActions } from "../../store/ModalToggleSlice";

const DeleteTask = (props) => {
  const dispatch = useDispatch();
  const modalToggleHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  const deleteId = useSelector((state) => state.modal.id);
  const deleteTask = () => {
    dispatch(dataHandlerActions.deleteTask(deleteId));
    dispatch(dataHandlerActions.clearPanel());
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <Modal>
      <div className={styles.actions}>
        <h2>Are you sure you want to delete this task?</h2>
        <div className={styles.button}>
          <Button onClick={deleteTask} content="Delete" styles="primary" />
          <Button
            onClick={modalToggleHandler}
            content="Cancel"
            styles="secondary"
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTask;
