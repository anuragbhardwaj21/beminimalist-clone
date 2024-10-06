import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getHairProduct } from "../Redux/Action/product/hairProductAction";

export const Hair = () => {
  document.title = "Hair - Minimalist";

  const [hairProducts, setHairProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getHairProduct({
        callback: (data) => {
          setLoading(false)
          setHairProducts(data);
        },
      })
    );
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="productpageheader">
        <h1>Hair</h1>
        <p>
          Shop our haircare products, developed with best-in-class & highly
          efficacious ingredients to address your hair concerns.
        </p>
      </div>
      <div className="productContainer">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          hairProducts.map((product) => <ProductCard product={product} />)
        )}
      </div>
      <Footer />
    </div>
  );
};
