import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModalActions } from "../../../store/ModalToggleSlice";

const Backdrop = () => {
  const dispatch = useDispatch();
  const CancelClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };
  return <div className={styles.backdrop} onClick={CancelClickHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </>
  );
};

export default Modal;
