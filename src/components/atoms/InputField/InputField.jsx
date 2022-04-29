import styles from "./InputField.module.css";
import Caption from "../FontStyles/Caption/Caption";

const InputField = (props) => {
  const fieldLabel = (label) => {
    if (label !== undefined) {
      return <Caption label={label} marginBottom={12} />;
    }
  };
  return (
    <div className={styles.container}>
      <>{fieldLabel(props.label)}</>
      <input
        className={styles.input}
        type={props.type ? props.type : "text"}
        disabled={props.disabled === "true" ? true : false}
        defaultValue={props.value}
        placeholder={props.placeholder}
        style={{ width: props.width }}
        onChange={props.OnChange}
      />
    </div>
  );
};

export default InputField;
