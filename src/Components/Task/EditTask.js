import React, { useState } from "react";
import styles from "./TaskFunctionsStyle.module.css";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";
import { dataHandlerActions } from "../../store/DataHandlerSlice";

const NewTask = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [submitError, setSubmitError] = useState(false);

  const dispatch = useDispatch();
  const CancelClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

  const Data = useSelector((state) => state.data.panelData);

  const inputChangeHandler = (data) => {
    setInputValue((prevState) => {
      return {
        ...prevState,
        [data.id]: {
          value: data.value,
          isValid: data.isValid,
        },
      };
    });
  };

  const formIsValid = () => {
    let isValid = true;
    for (let key in inputValue) {
      if (!inputValue[key].isValid) {
        isValid = false;
      }
    }
    return isValid;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid()) {
      setSubmitError(true);
      return;
    }

    const formData = {
      title: inputValue.title.value,
      description: inputValue.description.value,
      status: Data[0].status,
      id: Data[0].id,
    };

    dispatch(dataHandlerActions.editTask(formData));
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <Modal>
      <form onSubmit={formSubmitHandler} className={styles.actions}>
        <h2>Edit Task</h2>
        <Input
          onSubmit={submitError}
          onChange={inputChangeHandler}
          id="title"
          label="Title:"
          type="text"
          value={Data[0].title}
          placeholder="Edit Task..."
        />
        <Input
          onSubmit={submitError}
          onChange={inputChangeHandler}
          id="description"
          label="Description:"
          type="text"
          value={Data[0].description}
          placeholder="Edit Description..."
        />
        <Button onClick={props.onClick} content="Edit" styles="primary" />
        <Button
          onClick={CancelClickHandler}
          content="Cancel"
          styles="secondary"
        />
      </form>
    </Modal>
  );
};

export default NewTask;
