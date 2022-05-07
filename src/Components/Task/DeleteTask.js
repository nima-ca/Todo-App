import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { dataHandlerActions } from "../../store/DataHandlerSlice";
import { toggleModalActions } from "../../store/ModalToggleSlice";
import { panelDataActions } from "../../store/PanelDataSlice";

const DeleteTask = (props) => {
  const dispatch = useDispatch();
  const modalToggleHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  const deleteId = useSelector((state) => state.modal.id);
  const deleteTask = () => {
    dispatch(dataHandlerActions.deleteTask(deleteId));
    dispatch(panelDataActions.clearPanel());
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <Modal>
      <h1>Are you sure you want to delete this task?</h1>
      <div className="buttons">
        <Button onClick={deleteTask} content={"Create"} styles="primary" />
        <Button
          onClick={modalToggleHandler}
          content={"Cancel"}
          styles="secondary"
        />
      </div>
    </Modal>
  );
};

export default DeleteTask;
