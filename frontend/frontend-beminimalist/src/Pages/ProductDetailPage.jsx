import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const ProductDetailPage = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  const { data: singleProduct } = useSelector(
    (state) => state.productReducer.singleProduct
  );

  useEffect(() => {
    const productDetailData = localStorage.getItem(
      "product-detail-beminimalist"
    );
    const productDetail = JSON.parse(productDetailData);
    setCurrentProduct(productDetail);
  }, []);

  useEffect(() => {
    document.title = singleProduct.title || currentProduct.title;
  }, [singleProduct]);

  return (
    <div>
      <Navbar />
      <div className="product-detail-page"></div>
      <Footer />
    </div>
  );
};
