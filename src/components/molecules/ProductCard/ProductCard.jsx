import styles from "./ProductCard.module.css";
import ImageContainer from "../../atoms/ImageContainer/Image";
import Subheadline from "../../atoms/FontStyles/Subheadline/Subheadline";
import Chip from "../../atoms/Chip/Chip";
import BodyText from "../../atoms/FontStyles/Body/Body";
import Headline from "../../atoms/FontStyles/Headline/Headline";
import Button from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";

const ProductCard = (props) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const CardType = (type) => {
    if (type === "detail") {
      return (
        <>
          <InputField
            label="Quantity"
            width={64}
            type="number"
            placeholder={1}
            OnChange={props.OnChangeField}
          />
          <Button
            label="Add to cart"
            buttonIcon="plus"
            type="fill"
            OnPress={props.OnCart}
          />
        </>
      );
    } else if (type === "admin") {
      return (
        <>
          <InputField
            label="Quantity"
            width={64}
            type="number"
            placeholder={1}
            OnChange={props.OnChangeField}
          />
          <Button
            label="Update"
            buttonIcon="no-icon"
            type="fill"
            OnPress={props.OnUpdate}
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            label="View Details"
            buttonIcon="no-icon"
            OnPress={props.OnView}
          />
          <Button
            label="Add to cart"
            buttonIcon="plus"
            type="fill"
            OnPress={props.OnCart}
          />
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      <ImageContainer url={props.image} size={480} />
      <div className={styles.wrapped}>
        <div className={styles.info}>
          <Subheadline label={props.title} />
          <Chip label={props.category} />
          <BodyText label={props.description} />
          <Headline label={formatter.format(props.price)} />
          <Subheadline label={`Stock: ${props.quantity}`} />
        </div>
        <div className={styles.action}>{CardType(props.type)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
