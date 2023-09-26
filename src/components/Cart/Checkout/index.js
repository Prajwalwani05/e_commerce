import React,{useState} from 'react';
import celebration from "../../../images/celebration.png";
import {useNavigate} from "react-router-dom"
import "./style.css";
const Checkout = () => {
    const navigate = useNavigate();
    const [success , setSuccess] = useState(false);
    const placedOrder = () =>{
        setSuccess(true);
        setTimeout(() => {
            navigate('/shop');
        }, 5000);
    }
  return (
    <div className='modal'>
        { success ? ( <div className='innerModal placedd'>
            <img src={celebration} alt='iimg' style={{width:"20rem"}}/>
            <h1 style={{fontSize:"2rem"}}>Order Placed✌️</h1>
        </div>) :(
             <div className='innerModal'>
             <img src='https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png' style={{width:"20rem"}} alt='img'/>
         
       <div class="inputs">
           <input type="text" id="card-number" placeholder="Card number" required/>
           <input type="text" id="card-holder" placeholder="Card holder's name" required/>
           <input type="text" id="expiry-date" placeholder="MM/YY" required/>
           <input type="text" id="cvv" placeholder="CVV" required/>
       </div>
       <div className='buttonDiv'>
       <button type="submit" className="placedBtn" onClick={placedOrder}>Place your order</button>
       </div>
       </div>
        ) }
    </div>
  )
}

export default Checkout;