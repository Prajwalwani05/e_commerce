import React from 'react'
import Banner from './Banner'
import "./style.css";
import Category from '../Category';
import TopProducts from './TopProducts';
import Header from '../Common/Header';

const Home = ({setCat}) => {
  return (
    <div className='Home'>
      <div className='headerBanner'>
      <Header/>
      <Banner />
        </div>
       <div className='catProdBrand'>
        <Category setCat={setCat}/>
        <TopProducts />
       </div>
    </div>
  )
}

export default Home