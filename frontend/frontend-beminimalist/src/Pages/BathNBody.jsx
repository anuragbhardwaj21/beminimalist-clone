import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getBathNBodyProduct } from "../Redux/Action/product/bathNBodyProductAction";

export const BathNBody = () => {
  document.title = "Bath & Body - Minimalist";

  const [bathnBodyProducts, setBathnBodyProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getBathNBodyProduct({
        callback: (data) => {
          setLoading(false);
          setBathnBodyProducts(data);
        },
      })
    );
  }, [dispatch]);

  return (
    <div>
      {" "}
      <Navbar />
      <div className="productpageheader">
        <h1>Bath & Body</h1>
        <p>
          Treat your body from head to toe with our range of science-backed &
          efficacious range of body care products. Protect every last inch of
          your skin.
        </p>
      </div>
      <div className="productContainer">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          bathnBodyProducts.map((product) => <ProductCard product={product} />)
        )}
      </div>
      <Footer />
    </div>
  );
};
