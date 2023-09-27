import React from "react";
import Product from "../components/Product";
import Header from "../components/Common/Header";
import { items } from "../Data";
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { ProductContext } from "../context/ProductContext";
const ProductPage = () => {
  const { product , setAddToCart , addToCart } = useContext(ProductContext);
  const relatedProducts = items.filter((item)=>item.category === product.category && item.id !== product.id);

  const handleCart = (item) =>{
    if(!addToCart.some((cartProd)=> cartProd.id === item.id)){
      setAddToCart([...addToCart , item]);
    }
  }
  return (
    <div>
      <Header />
      <Product />
      {relatedProducts.length > 0 && <h1 className="relatedProducts" style={{fontWeight:"700"}}>Related Products</h1>}
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
                    <div className="productPrice">$ {ele.price}</div>
                    <div className='productCartIcon' onClick={(event)=>handleCart(ele)}><BsCartPlus style={{fontSize:"2.2rem"}}/></div>
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
