import NewTask from "../../Task/NewTask";
import DeleteTask from "../../Task/DeleteTask";
import EditTask from "../../Task/EditTask";

const ModalContainer = (props) => {
  if (props.type === "newTask") return <NewTask />;
  if (props.type === "deleteTask") return <DeleteTask />;
  if (props.type === "editTask") return <EditTask />;
};

export default ModalContainer;
