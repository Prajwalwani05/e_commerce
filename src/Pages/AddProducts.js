import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import "./addProducts.css";
import {itemsData} from "../Data";

const AddProducts = () => {
  const [productDesc , setProductDesc] = useState('');
  const [productSpecs , setProductSpecs] = useState('');
  const [productPrice , setProductPrice] = useState('');
  const [productImg , setProductImg] = useState(null);
  const [products , setProducts] = useState(itemsData);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  const handleImg = (e) =>{
    const file = e.target.files[0];
    if (file) {
      const acceptedFormats = ["image/jpeg", "image/jpg", "image/png"]
      if (acceptedFormats.includes(file.type)){
        const imageURL = URL.createObjectURL(file);
        setProductImg(imageURL);
      }
      else{
        alert("Please select a valid image (JPEG, JPG, or PNG).")
        e.target.value = null;
      }
    }
  }
  const handleAddProduct = (e) =>{
    e.preventDefault();
    const newProduct = {
      id: itemsData.length + 1,
      description: productDesc,
      specs: productSpecs,
      price: productPrice,
      img: productImg
    }

    setProducts((prev)=>[...prev , newProduct]);
    // const existingProducts = JSON.parse(localStorage.getItem('items'))|| [];
    const updatedProducts = [...products, newProduct];
    localStorage.setItem('items' , JSON.stringify(updatedProducts));
    console.log(itemsData);
    alert("Product Added");
    setProductDesc('');
    setProductSpecs('');
    setProductPrice('');
    setProductImg(null);
    console.log(products);
  }
  return (
    <div>
        <Header isHeaderBg={true}/>
        <div className='form'>
        <form onSubmit={handleAddProduct}>
          <div className='inputDiv'>
          <label>Product name</label><br/>
          <input className='addProductInput' type='text' value={productDesc} onChange={(e)=>setProductDesc(e.target.value)} required/>
          </div>
          <div className='inputDiv'>
          <label>Product description</label><br/>
          <input className='addProductInput' type='text' value={productSpecs} onChange={(e)=>setProductSpecs(e.target.value)} required/>
          </div>
          <div className='inputDiv'>
          <label>Product price</label><br/>
          <input className='addProductInput' type='number' value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} required/>
          </div>
          <div >
          <label>Product image</label><br/>
          <input className='addProductInput' type='file' name='img' onChange={handleImg} id='file'/>
          </div>
          {productImg && (
            <div>
              <img src={productImg} style={{width:"20rem", padding:"2rem"}} alt="Product" />
            </div>
          )}
          <div>
            <button className="formBtn" type='submit'>Add Product</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default AddProducts;