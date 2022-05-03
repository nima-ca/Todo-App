import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const hasError = !isValid && (isTouched || props.onSubmit);

  useEffect(() => {
    setIsValid(isNotEmpty(enteredValue));
    props.onChange({
      id: props.id,
      value: enteredValue,
      isValid,
    });
  }, [enteredValue, isValid]);

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
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
