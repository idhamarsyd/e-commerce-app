import styles from "./ActionBar.module.css";
const { default: Button } = require("../Button/Button");
const { default: Headline } = require("../FontStyles/Headline/Headline");

const ActionBar = (props) => {
  return (
    <div className={styles.container}>
      <Button buttonIcon="back" label="Back" OnPress={props.OnPress} />
      <Headline label={props.label} />
    </div>
  );
};

export default ActionBar;
