import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";

const NewTask = (props) => {
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
      </form>
    </Modal>
  );
};

export default NewTask;
