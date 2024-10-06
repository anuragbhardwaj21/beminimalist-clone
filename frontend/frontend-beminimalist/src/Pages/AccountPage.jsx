import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Action/auth/logoutAction";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
export const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isAuthenticated = useSelector(state => state?.Login?.userData?.username ? true : false )

  const { username: name } = useSelector((store) => store?.Login?.userData);
  document.title = `${name}`;


  useEffect(()=>{
    if(!isAuthenticated){
      navigate("/login");
    }  
  },[isAuthenticated])

  const handleSubmit = () => {
    dispatch(
      logout({
        callback: (data) => {
          navigate("/login");
        },
      })
    );
  };

  return (
    <div>
      <Navbar />
      <h1>My Account</h1>
      <p>
        Welcome back, {name}!
        <button className="logoutbutton" onClick={() => handleSubmit()}>
          Logout <ion-icon name="log-out-outline"></ion-icon>
        </button>
      </p>
      <Footer />
    </div>
  );
};

