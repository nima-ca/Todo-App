import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const Input = (props) => {
  const inputDefaultValue = props.value ? props.value : "";
  const [enteredValue, setEnteredValue] = useState(inputDefaultValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const hasError = !isValid && (isTouched || props.onSubmit);
  const { onChange, id } = props;

  useEffect(() => {
    setIsValid(isNotEmpty(enteredValue));
    onChange({
      id: id,
      value: enteredValue,
      isValid,
    });
  }, [enteredValue, isValid, id]);

  const inputClasses = `${styles.input} ${hasError ? styles.invalid : ""}`;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={inputClasses}
        onChange={valueChangeHandler}
        onBlur={valueBlurHandler}
        type={props.type}
        id={props.id}
        value={enteredValue}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
