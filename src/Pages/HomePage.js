import React from 'react'
import Home from '../components/Home';
import Header from '../components/Common/Header';


const HomePage = ({setCat}) => {
  return (
    <div>
      <Header />
      <Home setCat={setCat} /> 
    </div>
  )
}

export default HomePage