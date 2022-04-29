import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/molecules/ProductCard/ProductCard";
import ActionBar from "../components/atoms/ActionBar/ActionBar";
import {
  addCart,
  updateCartItem,
  updateQuantity,
  resetQuantity,
} from "../stores/cartReducer";
import { fetchProducts, decreaseQuantity } from "../stores/productsReducer";
import React, { useState } from "react";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSelector((state) => state.products);
  const { cart, quantity } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  const thisProduct = data[id - 1];

  // const [cartQuantity, setCartQuantity] = useState();

  // const onChangeFieldHandler = (e) => {
  //   const itemQuantity = cartQuantity;
  //   dispatch(updateQuantity(parseInt(itemQuantity)));
  // };

  const checkItem = (query) => {
    const found = cart.some((el) => el.id === query.id);
    return found;
  };

  const addCartHandler = (item) => {
    const newItem = { ...item, quantity: quantity };
    console.log(newItem);
    if (isAuthenticated) {
      if (!checkItem(item)) {
        dispatch(addCart(item));
      } else {
        dispatch(updateCartItem(item));
      }
      // dispatch(decreaseQuantity(newItem));
      dispatch(resetQuantity());
    } else {
      navigate("/login");
    }
  };

  const quantityInputHandler = (e, product) => {
    const itemQuantity = parseInt(e.target.value);
    if (itemQuantity > product.quantity) {
      dispatch(updateQuantity(product.quantity));
    } else {
      dispatch(updateQuantity(itemQuantity));
    }
  };

  return (
    <div className="productList">
      <ActionBar label="Product Detail" OnPress={() => navigate("/")} />
      <ProductCard
        type="detail"
        title={thisProduct.title}
        category={thisProduct.category}
        description={thisProduct.description}
        image={thisProduct.image}
        price={thisProduct.price}
        quantity={thisProduct.quantity}
        OnChangeField={(e) =>
          dispatch(updateQuantity(parseInt(e.target.value)))
        }
        OnCart={() => addCartHandler(thisProduct)}
      />
    </div>
  );
};

export default ProductDetail;
