import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";

const NewTask = (props) => {
  const dispatch = useDispatch();
  const CancelClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <Modal>
      <h1>New Task</h1>
      <form>
        <Input id="title" label="Title" type="text" placeholder="New Task..." />
        <Input
          id="description"
          label="Description"
          type="text"
          placeholder="Description..."
        />
        <Button onClick={props.onClick} content={"Create"} styles="primary" />
        <Button
          onClick={CancelClickHandler}
          content={"Cancel"}
          styles="secondary"
        />
      </form>
    </Modal>
  );
};

export default NewTask;
