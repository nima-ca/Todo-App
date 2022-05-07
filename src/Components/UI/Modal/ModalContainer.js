import NewTask from "../../Task/NewTask";
import DeleteTask from "../../Task/DeleteTask";

const ModalContainer = (props) => {
  if (props.type === "newTask") return <NewTask />;
  if (props.type === "deleteTask") return <DeleteTask />;
};

export default ModalContainer;
