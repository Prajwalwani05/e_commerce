import React from 'react'
import Header from '../Common/Header'
import Banner from './Banner'
import "./style.css";
const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Banner />
        {/* <div className='bannerBox'></div> */}
    </div>
  )
}

export default Home