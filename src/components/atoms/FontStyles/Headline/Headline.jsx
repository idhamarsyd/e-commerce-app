import styles from "./Headline.module.css";

const Headline = (props) => {
  const properties = {
    color: props.color,
  };

  return (
    <h1 className={styles.headline} style={{ color: properties.color }}>
      {props.label}
    </h1>
  );
};

export default Headline;
