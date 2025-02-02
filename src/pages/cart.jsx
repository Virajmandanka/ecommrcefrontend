import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return <p>Your cart is empty</p>;
    }

    return cart.map((item) => (
      <div key={item._id} className="cart-item">
        <img
          src={item.image}
          alt={item.title}
          className="cart-item-image"
        />
        <div className="cart-item-details">
          <p className="cart-item-title">{item.title}</p>
          <p className="cart-item-price">
            ${item.price} x {item.quantity}
          </p>
        </div>
        <button
          onClick={() => removeFromCart(item._id)}
          className="remove-from-cart-button"
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items-container">{renderCartItems()}</div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;

