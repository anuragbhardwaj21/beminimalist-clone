import React, { useState } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { getSingleProduct,postCartProduct } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    dispatch(postCartProduct(product));
  };

  const generateRandomDigit = () => {
    const randomNumber = Math.random();
    const randomDigit = Math.floor(randomNumber * (200 - 100 + 1)) + 100;
    return randomDigit;
  };


  const redirectToDetailPage = (productId) => {
    dispatch(getSingleProduct(productId));
    navigate(`/allproducts/${productId}`);
  };
  
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
        onClick={() => redirectToDetailPage(product.id)}
      />
      <h5>{product.title}</h5>
      <p className="product-uses">{product.uses}</p>
      <p className="product-price">
        <span>₹ {generateRandomDigit() + product.price}</span> ₹ {product.price}
      </p>
      <div className="add-to-cart">
        <div className="quantity-control">
          <button onClick={decreaseQuantity}>
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <button className="cart-button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
