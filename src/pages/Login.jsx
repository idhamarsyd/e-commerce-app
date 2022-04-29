import Headline from "../components/atoms/FontStyles/Headline/Headline";
import NavBar from "../components/molecules/NavBar/Navbar";
import ImageContainer from "../components/atoms/ImageContainer/Image";
import InputField from "../components/atoms/InputField/InputField";
import Button from "../components/atoms/Button/Button";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  authUser,
  saveToken,
  checkEmail,
  setPassword,
  resetError,
  authAdmin,
} from "./../stores/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    username,
    password,
    loading,
    error,
    email,
    isAuthenticated,
    adminStatus,
    adminPassword,
  } = useSelector((state) => state.user);
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();

  useEffect(() => {
    dispatch(resetError());
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!adminStatus) {
      await dispatch(
        authUser({
          username,
          password,
        })
      );
      dispatch(saveToken());
    } else {
      dispatch(authAdmin());
    }
  };

  return (
    <div className="productList">
      <Headline label="Login" />
      {loading ? <Headline label="Tunggu Sebentar..." /> : <></>}
      {error ? <Headline label="Ada Kesalahan!" /> : <></>}
      <div className="login-wrapped">
        <ImageContainer
          url="https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          size={400}
        />
        <form className="form-wrapped" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            OnChange={(e) => dispatch(checkEmail(e.target.value))}
          />
          <InputField
            label="Password"
            type="password"
            OnChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <Button
            label="Login"
            buttonIcon="no-icon"
            type="fill"
            buttonType="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
