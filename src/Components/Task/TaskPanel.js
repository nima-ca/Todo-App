import styles from "./TaskPanel.module.css";
import SwitchButton from "../UI/SwitchButton";
import Delete from "../UI/Icons/delete-svgrepo-com.svg";
import Edit from "../UI/Icons/edit-svgrepo-com.svg";

const TaskPanel = (props) => {
  return (
    <div className={styles["tasks__panel"]}>
      <div className={styles.body}>
        <h2 className={styles.header}>TODO Description</h2>
        <div>
          <div className={styles.title}>
            <h3>test</h3>
            <div className={styles.icons}>
              <SwitchButton />
              <img src={Delete} alt="" />
              <img src={Edit} alt="" />
            </div>
          </div>
          <p className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            veritatis, rem autem tenetur voluptatibus deserunt nihil minus vitae
            reiciendis commodi animi, dignissimos consequatur distinctio qui
            incidunt praesentium nostrum, adipisci vel?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskPanel;
