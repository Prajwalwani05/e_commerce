import React,{useContext, useState , useEffect} from 'react'
import Header from '../Common/Header'
import {items} from "../../Data";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import FilledAlerts from "../Common/Toaster/index";
const Shop = () => {
  const navigate = useNavigate()
  const {setProduct, setAddToCart , addToCart}  = useContext(ProductContext);
  const [success , setSuccess] = useState(false);
  
  
  const singleProduct = (item ,id) => {
    if(id){
      setProduct(item);
      navigate(`${`/product/${item.description.split(" ")}`}`);
    }
  };

  
  const handleCart = (event , item) => {
    event.stopPropagation();
    if(!addToCart.some((cartProd)=>cartProd.id === item.id)){
      setAddToCart([...addToCart , item]);
      setSuccess(true);
      setTimeout(()=>{
        setSuccess(false);
      },1200)
    }
    else{
      alert("Already in the cart");
    }
  };

  
  return (
    <div>
        <Header />
        {success && <FilledAlerts text={"Added to cart"} color = {"success"} />}
        <div className='allProducts'>
          {
            items.map((item , id)=>{
              return(
                <div className='product' key={id} onClick={()=>singleProduct(item ,item.id)}>
                  <div className='productImgDiv'>
                  <img className='productImg' src={item.img} style={{width:"22rem"}} alt={item.id}/>
                  </div>
                  <div className='productName'>{item.description}</div>
                  <div className='productPrices'>
                  <div className='rupeeDiv'>
                  <BsCurrencyDollar/>
                  <div className='productPrice'>{item.price}</div>
                  </div>
                  <div className='productCartIcon' onClick={(event)=>handleCart(event ,item)}><BsCartPlus style={{fontSize:"2.2rem"}}/></div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Shop;