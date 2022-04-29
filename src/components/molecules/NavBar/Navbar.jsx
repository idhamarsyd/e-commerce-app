import styles from "./Navbar.module.css";
import Subheadline from "../../atoms/FontStyles/Subheadline/Subheadline";
import LinkText from "../../atoms/FontStyles/Link/Link";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "./../../../stores/userReducer";
import { emptyCart } from "./../../../stores/cartReducer";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(userLogout());
    dispatch(emptyCart());
    navigate("/login");
  };

  const NavbarType = (type) => {
    if (type === "user") {
      return (
        <>
          <div className={styles.left}>
            <Subheadline label="Bukapedia" color="#125B50" />
            <Button
              label="Products"
              color="#181306"
              buttonIcon="no-icon"
              OnPress={() => navigate("/")}
            />
          </div>
          <div className={styles.right}>
            <Button
              label="Cart"
              buttonIcon="cart"
              OnPress={() => navigate("/cart")}
            />
            {isAuthenticated ? (
              <Button
                label="Logout"
                buttonIcon="logout"
                OnPress={() => logoutHandler()}
              />
            ) : (
              <Button
                label="Login"
                buttonIcon="login"
                OnPress={() => navigate("/login")}
              />
            )}
          </div>
        </>
      );
    } else if (type === "admin") {
      return (
        <>
          <div className={styles.left}>
            <Subheadline label="Bukapedia" color="#125B50" />
            <Button
              label="Products"
              color="#181306"
              buttonIcon="no-icon"
              OnPress={() => navigate("/")}
            />
            <Button
              label="Rekap Penjualan"
              color="#181306"
              buttonIcon="no-icon"
              OnPress={() => navigate("/rekap-penjualan")}
            />
          </div>
          <div className={styles.right}>
            <Button
              label="Logout"
              buttonIcon="logout"
              OnPress={() => logoutHandler()}
            />
          </div>
        </>
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapped}>{NavbarType(props.type)}</div>
    </div>
  );
};

export default NavBar;
