import "./App.css";
import NavBar from "./components/molecules/NavBar/Navbar";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.user);
  // useEffect(() => {
  //   console.log("session storage berubah");
  //   // showLogin();
  // }, [sessionStorage]);

  // // const showLogin = () => {
  // if (token === null) {
  //   return <Login />;
  // }
  // // };

  return (
    <div className="App">
      <NavBar type={role === "admin" ? "admin" : "user"} />
      <Routes>
        <Route path="/" element={<Products role={role} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
