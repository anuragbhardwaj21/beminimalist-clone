import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getAllProduct } from "../Redux/Action/product/allProductAction";

export const AllProducts = () => {
  document.title = "All Products - Minimalist";

  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllProduct({
        callback: (data) => {
          setLoading(false);
          setAllProducts(data);
        },
      })
    );
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="productpageheader">
        <h1>All Products</h1>
        <p>
          Shop our efficacious, transparent, and research-backed range of
          skincare & haircare products. Each product is formulated to target
          your specific skin or hair concerns.
        </p>
      </div>
      <div className="productContainer">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          allProducts.map((product) => <ProductCard key={product._id} product={product} />)
        )}
      </div>
      <Footer />
    </div>
  );
};
