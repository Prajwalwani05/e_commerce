import React from 'react'
import Shop from '../components/Shop'

const ShopPage = ({cat , setCat}) => {
  return (
    <div>
      <Shop cat={cat} setCat={setCat}/>
    </div>
  )
}

export default ShopPage