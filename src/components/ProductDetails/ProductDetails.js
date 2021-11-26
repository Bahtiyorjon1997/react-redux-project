import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../redux/actions/productActions";
import { useEffect } from "react";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div
      className="ui grid container"
      style={{ padding: "8rem 4rem 4rem 4rem", height: "100vh" }}
    >
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} alt="" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2 style={{ marginBottom: "3.3rem" }}>
                  <a href="" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "6rem",
                    fontSize: "2rem",
                    margin: "1rem",
                  }}
                  className="ui brown block header"
                >
                  {category}
                </h3>
                <p>{description}</p>
                <div
                  className="ui animated button"
                  tabIndex="0"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "4rem",
                  }}
                >
                  <div
                    className="hidden content"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <i className="shop icon center"></i>
                    <p className="white" style={{ marginTop: "-0.2rem" }}>
                      Add to the Cart
                    </p>
                  </div>
                  <div
                    className="visible content center aligned"
                    style={{ marginTop: "0.7rem", fontWeight: "700" }}
                  >
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
