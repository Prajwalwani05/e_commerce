import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { BsCurrencyDollar } from "react-icons/bs";
import Header from "../Common/Header";
import "./style.css";
import { AiFillDelete } from "react-icons/ai";
import FilledAlerts from "../Common/Toaster/index";
import Button from "../Common/Button";
import { NavLink } from "react-router-dom";
import TotalDiv from "./TotalDiv";
const Cart = () => {
  const [success, setSuccess] = useState(false);
  const { addToCart, setAddToCart } = useContext(ProductContext);
  const [cartItem, setCartItem] = useState(
    Array.isArray(addToCart) ? addToCart : []
  );

  const handleRemoveCart = (e, item) => {
    e.stopPropagation();
    setCartItem([...addToCart, cartItem]);
    const updatedItem = cartItem.filter((ele) => ele.id !== item.id);
    setCartItem(updatedItem);
    setAddToCart(updatedItem);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1200);
  };

  const increaseQuantity = (item) => {
    const updatedItem = { ...item }; // Create a copy of the item
    updatedItem.quantity = (updatedItem.quantity || 1) + 1; // Update quantity
    const updatedCart = cartItem.map((cartItem) =>
      cartItem.id === item.id ? updatedItem : cartItem
    );
    setCartItem(updatedCart);
    setAddToCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity && item.quantity > 1) {
      const updatedItem = { ...item }; // Create a copy of the item
      updatedItem.quantity -= 1; // Decrease quantity
      const updatedCart = cartItem.map((cartItem) =>
        cartItem.id === item.id ? updatedItem : cartItem
      );
      setCartItem(updatedCart);
      setAddToCart(updatedCart);
    }
  };
  const total = cartItem.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
 
  const checkOut = () =>{
    setAddToCart([]);
    setCartItem([]);

  }
  return (
    <div className="Cart">
      <Header />
      {cartItem.length === 0 ? (
        <div className="empty">
          <p>Cart is empty!!</p>
          <NavLink to={"/shop"}>
            <Button name={"Shop"} onclick={() => console.log("to shop")} />
          </NavLink>
        </div>
      ) : (
        <div className="mainCart">
        <div className="cartPage">
          {success && (
            <FilledAlerts text={"Removed from the cart"} color={"error"} />
          )}
          <div
            className="allProducts cartAllProducts"
            style={{ display: "grid", gridTemplateColumns: "repeat" }}
          >
            {cartItem.map((item, id) => {
              return (
                <div className="product cartProdd" key={id}>
                  <div className="productImgDiv">
                    <img
                      className="productImg"
                      src={item.img}
                      style={{ width: "22rem" }}
                      alt={item.id}
                    />
                  </div>
                  <div className="productName">{item.description}</div>
                  <div className="productPrices">
                    <div className="rupeeDiv">
                      <BsCurrencyDollar />
                      <div className="productPrice">{item.price}</div>
                    </div>
                    <div className="productCartIcon" />
                    <div className="quantity">
                    <div class="value-button" id="decrease" onClick={()=>decreaseQuantity(item)} value="Decrease Value">-</div>
                       <input type="text" id="quantity" value={item.quantity || 1} readOnly />
                    <div class="value-button" id="increase" onClick={()=>increaseQuantity(item)} value="Increase Value">+</div>
                    </div>
                   
                    <AiFillDelete
                      onClick={(e) => handleRemoveCart(e, item)}
                      style={{ fontSize: "2.5rem", marginRight: "2rem" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
          <div className="total">
            <div><TotalDiv cartItem={cartItem}/></div>
            <div><p style={{ fontSize: "1.6rem" }} className="totalCalculate">
              Total : <BsCurrencyDollar />
              {total}
            </p></div>
            <div className="checkoutButton" onClick={()=> checkOut()}><button style={{textAlign:"center"}}>Checkout</button></div>
          </div>
          </div>
      )}
    </div>
  );
};

export default Cart;
