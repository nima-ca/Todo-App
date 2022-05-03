import styles from "./Button.module.css";

const Button = (props) => {
  let buttonClasses;
  if (props.styles === "primary") {
    buttonClasses = styles.primary;
  } else if (props.styles === "secondary") {
    buttonClasses = styles.secondary;
  } else if (props.styles === "tertiary") {
    buttonClasses = styles.tertiary;
  }

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      {props.content}
    </button>
  );
};

export default Button;
