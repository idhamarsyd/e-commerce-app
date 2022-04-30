import Headline from "../components/atoms/FontStyles/Headline/Headline";
import ProductCard from "../components/molecules/ProductCard/ProductCard";
import { useNavigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  plusStock,
  minusStock,
} from "../stores/productsReducer";
import { addCart, updateCartItem } from "../stores/cartReducer";
import React, { useEffect } from "react";

const Products = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.products);
  const { cart, quantity } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);

  // const intersection = data.filter((element) => cart.includes(element));
  // console.log(cart);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const checkItem = (query) => {
    const found = cart.some((el) => el.id === query.id);
    return found;
  };

  const addCartHandler = (item) => {
    const newItem = { ...item, quantity: quantity };
    if (isAuthenticated) {
      if (!checkItem(item)) {
        dispatch(addCart(item));
      } else {
        dispatch(updateCartItem(item));
      }
      // dispatch(decreaseQuantity(newItem));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="productList">
      <Headline label="Products" />
      {props.role === "admin"
        ? data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                image={product.image}
                price={product.price}
                value={product.quantity}
                // OnUpdate={dispatch(updateQuantity(newItem))}
                OnPlus={() => dispatch(plusStock(product))}
                OnMinus={() => dispatch(minusStock(product))}
                quantity={product.quantity}
                type="admin"
              />
            );
          })
        : data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                OnView={() => navigate(`/product/${product.id}`)}
                OnCart={() => addCartHandler(product)}
              />
            );
          })}
    </div>
  );
};

export default Products;
