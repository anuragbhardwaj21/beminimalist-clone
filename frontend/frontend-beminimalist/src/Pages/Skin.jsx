import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getSkinProduct } from "../Redux/Action/product/skinProductAction";

export const Skin = () => {
  document.title = "Skin - Minimalist";

  const dispatch = useDispatch();
  const [skinProducts, setSkinProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getSkinProduct({
      callback:(data)=>{
        setLoading(false)
        setSkinProducts(data);
      }
    }));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="productpageheader">
        <h1>Skin</h1>
        <p>
          Shop our efficacious, transparent, and research-backed range of
          skincare products. Each product is formulated to target your specific
          skin concerns.
        </p>
      </div>
      <div className="productContainer">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          skinProducts.map((product) => <ProductCard product={product} />)
        )}
      </div>
      <Footer />
    </div>
  );
};
