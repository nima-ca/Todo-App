import { dataHandlerActions } from "../../store/DataHandlerSlice";
import { useDispatch } from "react-redux";
import styles from "./CheckBox.module.css";

const CheckBox = (props) => {
  const dispatch = useDispatch();
  const checkboxClickHandler = () => {
    dispatch(dataHandlerActions.toggleStatus(props.id));
  };

  return (
    <div className={styles.wrapper} onClick={checkboxClickHandler}>
      <input type="checkbox" id="check" />
    </div>
  );
};

export default CheckBox;
