import styles from "./TotalPrice.module.css";
import LinkText from "../FontStyles/Link/Link";
import Subheadline from "../FontStyles/Subheadline/Subheadline";

const TotalPrice = (props) => {
  return (
    <div className={styles.container}>
      <LinkText label={props.headerLabel} color="#181306" opacity={0.4} />
      <Subheadline label={props.totalPrice} color="#181306" />
    </div>
  );
};

export default TotalPrice;
