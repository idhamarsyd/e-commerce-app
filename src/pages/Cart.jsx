import { useSelector, useDispatch } from "react-redux";
import LinkText from "../components/atoms/FontStyles/Link/Link";
import TableData from "../components/molecules/TableData/TableData";
import TotalPrice from "../components/atoms/TotalPrice/TotalPrice";
import Button from "../components/atoms/Button/Button";
import {
  addCart,
  updateCartItem,
  updateQuantity,
  resetQuantity,
  updateItem,
  emptyCart,
} from "../stores/cartReducer";
import { addRecap, updateRecap } from "../stores/rekapReducer";
import React, { useEffect } from "react";
import { decreaseQuantity } from "../stores/productsReducer";

const {
  default: Headline,
} = require("../components/atoms/FontStyles/Headline/Headline");
const {
  default: Subheadline,
} = require("../components/atoms/FontStyles/Subheadline/Subheadline");

const Cart = (props) => {
  const dispatch = useDispatch();
  const { cart, quantity } = useSelector((state) => state.cart);
  const { data } = useSelector((state) => state.products);
  const { rekap } = useSelector((state) => state.rekap);

  useEffect(() => {
    console.log(rekap);
    // console.log(cart);
  }, [rekap]);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const sum = cart.reduce((accumulator, object) => {
    return accumulator + object.price * object.quantity;
  }, 0);

  const OnUpdateHandler = (e, product) => {
    if (e.target.value.length !== 0) {
      const updateProduct = { ...product, quantity: parseInt(e.target.value) };
      dispatch(updateItem(updateProduct));
    } else {
      const updateProduct = { ...product, quantity: 0 };
      dispatch(updateItem(updateProduct));
    }
  };

  const checkItem = (query) => {
    const found = rekap.some((el) => el.id === query.id);
    return found;
  };

  const addToRekap = (item) => {
    dispatch(addRecap(item));
    dispatch(decreaseQuantity(item));
  };

  const updateToRekap = (item) => {
    dispatch(updateRecap(item));
    dispatch(decreaseQuantity(item));
  };

  const OnCheckoutHandler = async () => {
    // console.log("jalan");
    await cart.map((cartItem) => {
      if (
        cartItem.quantity <
        data.find((product) => product.id === cartItem.id).quantity
      ) {
        !checkItem(cartItem) ? addToRekap(cartItem) : updateToRekap(cartItem);
      }
    });
    dispatch(emptyCart());
  };

  return (
    <div className="productList">
      <Headline label="Cart" />
      {cart.length === 0 ? (
        <Subheadline label="Anda belum menambahkan item apapun." />
      ) : (
        <div className="wrapped">
          <div className="header">
            <div className="empty"></div>
            <div className="headerLabel">
              <LinkText label="Price" color="#93918B" />
              <LinkText label="Quantity" color="#93918B" />
              <LinkText label="Total" color="#93918B" />
            </div>
          </div>
          {cart.map((item) => {
            return (
              <TableData
                productName={item.title}
                unitPrice={item.price}
                totalPrice={item.price * item.quantity}
                quantity={item.quantity}
                imageUrl={item.image}
                error={
                  item.quantity >
                  data.find((product) => product.id === item.id).quantity
                    ? "true"
                    : "false"
                }
                OnUpdate={(e) => OnUpdateHandler(e, item)}
              />
            );
          })}
          <div className="bottomCart">
            <TotalPrice
              headerLabel="Total"
              totalPrice={formatter.format(sum)}
            />
            <Button
              label="Checkout"
              type="fill"
              buttonIcon="no-icon"
              OnPress={() => OnCheckoutHandler()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
