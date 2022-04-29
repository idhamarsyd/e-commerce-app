import styles from "./Chip.module.css";
import Caption from "../FontStyles/Caption/Caption";

const Chip = (props) => {
  return (
    <div className={styles.container}>
      <Caption label={props.label} color="#ff6363" />
    </div>
  );
};

export default Chip;
