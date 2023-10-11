import React from 'react'
import Home from '../components/Home';


const HomePage = ({setCat}) => {
  return (
    <div className="HomePage">
      <Home setCat={setCat} /> 
    </div>
  )
}

export default HomePage