import back from "../../../assets/back.svg";
import logout from "../../../assets/logout.svg";
import cart from "../../../assets/cart.svg";
import login from "../../../assets/login.svg";
import plus from "../../../assets/plus.svg";
import styles from "./Icon.module.css";

const Icon = (props) => {
  const IconTypes = (type) => {
    if (type === "back") {
      return <img src={back} alt="backIcon" />;
    } else if (type === "logout") {
      return <img src={logout} alt="backIcon" />;
    } else if (type === "cart") {
      return <img src={cart} alt="backIcon" />;
    } else if (type === "login") {
      return <img src={login} alt="backIcon" />;
    } else if (type === "no-icon") {
      return null;
    } else {
      return <img src={plus} alt="backIcon" />;
    }
  };

  return <>{IconTypes(props.type)}</>;
};

export default Icon;
