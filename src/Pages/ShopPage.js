import React from 'react'
import Shop from '../components/Shop'

const ShopPage = ({cat , setCat}) => {
  window.scrollTo(0,0)

  return (
    <div className='ShopPage'>
      <Shop cat={cat} setCat={setCat}/>
    </div>
  )
}

export default ShopPage