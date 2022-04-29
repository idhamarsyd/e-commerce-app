import styles from "./Caption.module.css";

const Caption = (props) => {
  const properties = {
    color: props.color,
    marginBottom: props.marginBottom ? props.marginBottom : 0,
  };

  return (
    <h1
      className={styles.caption}
      style={{ color: properties.color, marginBottom: properties.marginBottom }}
    >
      {props.label}
    </h1>
  );
};

export default Caption;
