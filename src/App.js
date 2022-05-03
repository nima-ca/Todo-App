import Main from "./Components/layout/Main";
import Task from "./Components/Task/Task";
import NewTask from "./Components/Task/NewTask";
import { useSelector } from "react-redux";

function App() {
  const isModalToggled = useSelector((state) => state.modal.isToggled);

  return (
    <>
      <Main>
        <Task />
        {isModalToggled && <NewTask />}
      </Main>
    </>
  );
}

export default App;
