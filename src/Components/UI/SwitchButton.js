import styles from "./SwitchButton.module.css";

const SwitchButton = (props) => {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};

export default SwitchButton;
