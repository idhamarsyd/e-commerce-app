import styles from "./Body.module.css";

const BodyText = (props) => {
  const properties = {
    color: props.color,
    width: props.width ? props.width : "auto",
    align: props.align ? props.align : "left",
  };

  return (
    <h1
      className={styles.body}
      style={{
        color: properties.color,
        width: properties.width,
        textAlign: properties.align,
      }}
    >
      {props.label}
    </h1>
  );
};

export default BodyText;
