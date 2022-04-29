import styles from "./Link.module.css";
import { NavLink } from "react-router-dom";

const LinkText = (props) => {
  const properties = {
    color: props.color,
    opacity: props.opacity,
  };

  return (
    <h1
      className={styles.link}
      style={{ color: properties.color, opacity: properties.opacity }}
    >
      {props.label}
    </h1>
  );
};

export default LinkText;
