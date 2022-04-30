import styles from "./TableData.module.css";
import ImageContainer from "../../atoms/ImageContainer/Image";
import BodyText from "../../atoms/FontStyles/Body/Body";
import InputField from "../../atoms/InputField/InputField";

const TableData = (props) => {
  const displayError = (error) => {
    if (error === "true") {
      return <BodyText label="*Quantity tidak terpenuhi" color="#FF6363" />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ImageContainer size={64} url={props.imageUrl} />
        <div>
          <BodyText width={270} label={props.productName} />
          <>{displayError(props.error)}</>
        </div>
      </div>
      <div className={styles.right}>
        <BodyText label={props.unitPrice} width={64} align="center" />
        <InputField
          width={64}
          value={props.quantity}
          type="number"
          OnChange={props.OnUpdate}
          disabled={props.disabled}
        />
        <BodyText label={props.totalPrice} width={64} align="center" />
      </div>
    </div>
  );
};

export default TableData;
