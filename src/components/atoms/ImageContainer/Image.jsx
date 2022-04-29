import styles from "./Image.module.css";

const ImageContainer = (props) => {
  const properties = {
    url: props.url
      ? props.url
      : "https://images.unsplash.com/photo-1650688331261-fd5e6de2e23a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    size: props.size,
  };

  return (
    <div
      className={styles.container}
      style={{
        background: "#FAFAFA",
        // border: "1px solid black",
        width: properties.size,
        position: "relative",
        height: properties.size,
        overflow: "hidden",
      }}
    >
      <img
        src={properties.url}
        style={{
          width: "100%",
          height: "100%",
          // objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImageContainer;
