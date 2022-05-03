import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.content}
    </button>
  );
};

export default Button;
