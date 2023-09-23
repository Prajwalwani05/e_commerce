import React from "react";
import Product from "../components/Product";
import Header from "../components/Common/Header";
import { items } from "../Data";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const ProductPage = () => {
  const { product } = useContext(ProductContext);
  const relatedProducts = items.filter((item)=>item.category === product.category && item.id !== product.id);
  return (
    <div>
      <Header />
      <Product />
      {relatedProducts.length > 0 && <h1 className="relatedProducts">Related Products</h1>}
      <div className="allProducts shuffled">
       
        { relatedProducts.map((ele , i )=>{
         
            return (
              <div className="product">
                <div className="productImgDiv">
                  <img
                    className="productImg"
                    src={ele.img}
                    style={{ width: "22rem" }}
                    alt={ele.id}
                  />
                </div>
                <div className="productName">{ele.description}</div>
                <div className="productPrices">
                  <div className="rupeeDiv">
                    <div className="productPrice">{ele.price}</div>
                  </div>
                </div>
              </div>
            );
            })}
      </div>
    </div>
  );
};

export default ProductPage;
