import React from 'react'

const TotalDiv = ({cartItem}) => {
  return (
    <div className='TotalDiv'>
        {
            cartItem.map((item)=>{
                return (
                    <div className='totalDivComponent'>
                        <img src={item.img} alt='img' style={{width:"5rem"}} className='totalImg'/>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TotalDiv