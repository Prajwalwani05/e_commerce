import React from 'react'
import { items } from '../../../Data'

const TopProducts = () => {
  return (
    <div className='topProducts'>
        {
            items.slice(7,12).map((item) =>{
                return(
                    <div className='tProd'>
                         <div className='productImgDiv'>
                  <img className='productImg' src={item.img} style={{width:"22rem"}} alt={item.id}/>
                  </div>
                  <div className='productName'>{item.description}</div>
                  <div className='productPrices'>
                  <div className='rupeeDiv'>
                  {/* <BsCurrencyDollar/> */}
                  <div className='productPrice'>{item.price}</div>
                  </div>
                  {/* <div className='productCartIcon' onClick={(event)=>handleCart(event ,item)}><BsCartPlus style={{fontSize:"2.2rem"}}/></div> */}
                  </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default TopProducts