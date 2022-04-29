import styles from "./Subheadline.module.css";

const Subheadline = (props) => {
  const properties = {
    color: props.color,
  };

  return (
    <h1 className={styles.subheadline} style={{ color: properties.color }}>
      {props.label}
    </h1>
  );
};

export default Subheadline;
