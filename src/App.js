import Main from "./Components/layout/Main";
import Task from "./Components/Task/Task";
import ModalContainer from "./Components/UI/Modal/ModalContainer";
import { useSelector } from "react-redux";

function App() {
  const isModalToggled = useSelector((state) => state.modal.isToggled);
  const type = useSelector((state) => state.modal.type);

  return (
    <>
      <Main>
        <Task />
        {isModalToggled && <ModalContainer type={type} />}
      </Main>
    </>
  );
}

export default App;
