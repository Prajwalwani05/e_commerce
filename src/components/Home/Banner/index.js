import React from 'react'
import "./style.css";
import Button from "../../Common/Button";
import {NavLink} from "react-router-dom";

const Banner = () => {
  return (
    <div className='fullBanner'>
    <div className='bannerHeader'>
    </div>
    <div className='Banner'>
       <div className='bannerText'>
          <h1>Experience Excellence</h1>
            <p>Elevate Your Shopping Experience</p>
            <NavLink to={"/shop"}>
            <Button name={"Shop now"} outlined={true}  onclick={()=>console.log("clicked")}/>
            </NavLink>
       </div>
    </div>
    
    </div>
  )
}

export default Banner