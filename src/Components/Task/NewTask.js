import React, { useState } from "react";
import styles from "./TaskFunctionsStyle.module.css";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { toggleModalActions } from "../../store/ModalToggleSlice";
import { dataHandlerActions } from "../../store/DataHandlerSlice";
import { v4 as uuidv4 } from "uuid";

const NewTask = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [submitError, setSubmitError] = useState(false);

  const dispatch = useDispatch();
  const CancelClickHandler = () => {
    dispatch(toggleModalActions.toggleModal());
  };

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
      status: "UnDone",
      id: uuidv4(),
    };

    dispatch(dataHandlerActions.addTask(formData));
    dispatch(toggleModalActions.toggleModal());
  };

  return (
    <Modal>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <h2>New Task</h2>
        <Input
          onSubmit={submitError}
          onChange={inputChangeHandler}
          id="title"
          label="Title:"
          type="text"
          placeholder="New Task..."
        />
        <Input
          onSubmit={submitError}
          onChange={inputChangeHandler}
          id="description"
          label="Description:"
          type="text"
          placeholder="Description..."
        />
        <Button onClick={props.onClick} content="Create" styles="primary" />
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
