import React from 'react'
import Cart from '../components/Cart'
import Header from '../components/Common/Header'

const CartPage = () => {
  return (
    <div className='CartPage'>
      <Header isHeaderBg={true}/>
      <Cart />
    </div>
  )
}

export default CartPage