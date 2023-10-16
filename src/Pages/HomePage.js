import React from 'react'
import Home from '../components/Home';


const HomePage = ({setCat}) => {
  window.scrollTo(0,0)

  return (
    <div className="HomePage">
      <Home setCat={setCat} /> 
    </div>
  )
}

export default HomePage