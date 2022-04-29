import styles from "./Button.module.css";
import LinkText from "../FontStyles/Link/Link";
import Icon from "../Icon/Icon";

const Button = (props) => {
  const properties = {
    color: props.type === "fill" ? "#FAF5E4" : "transparent",
  };

  return (
    <button
      type={props.buttonType === "submit" ? "submit" : "button"}
      onClick={props.OnPress}
      className={styles.link}
      style={{ backgroundColor: properties.color }}
    >
      <Icon type={props.buttonIcon} />
      <LinkText label={props.label} color="#125B50" />
    </button>
  );
};

export default Button;
