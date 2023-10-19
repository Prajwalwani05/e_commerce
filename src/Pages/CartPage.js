import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from '../components/Cart'
import Header from '../components/Common/Header'
import { TokenContext } from '../context/TokenContext'
const CartPage = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))
  if(!token){
    navigate('/signup');
  }
  window.scrollTo(0,0)

  return (
    <div className='CartPage'>
      <Header isHeaderBg={true}/>
      <Cart />
    </div>
  )
}

export default CartPage