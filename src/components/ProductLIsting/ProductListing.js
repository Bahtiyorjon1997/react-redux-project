import React, { useEffect } from "react";
import axios from "axios";
import "./ProductListing.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import Product from "../Product/Product";
import { log } from "async";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products", products);
  return (
    <div className="productlisting">
      <Product />
    </div>
  );
};

export default ProductListing;
