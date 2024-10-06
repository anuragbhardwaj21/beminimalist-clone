import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./RightNav.css";

export const RightNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [isInputVisible, setInputVisible] = useState(false);
  const isAuthenticated = false
  const cartItems = {}
  useEffect(()=>{
    setCount(cartItems.length)
  },[cartItems.length])
  const [searchValue, setSearchValue] = useState("");

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`Search term: ${searchValue}`);
      setSearchValue("");
    }
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    if (isAuthenticated) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="rightnav">
      {isInputVisible ? (
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchKeyDown}
        />
      ) : null}
      <button id="search-button" onClick={toggleInput}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
      <button id="login-button" onClick={navigateToLogin}>
        <ion-icon name="person-outline"></ion-icon>
      </button>
      <button id="cart-button" onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="bag-handle-outline"></ion-icon>
        )}
        {!isOpen && count > 0 && <span className="cart-badge">{count}</span>}
      </button>
      <div className={`rightpanel ${isOpen ? "open" : "close"}`}>
        
      </div>
    </div>
  );
};
