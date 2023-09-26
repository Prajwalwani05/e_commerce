import React,{useContext,useState ,useEffect} from 'react'
import "./style.css";
import {NavLink} from "react-router-dom";
import  {BsSearch}  from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
// import { CiMenuFries } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import logoImage from "../../../images/logoImage.png"
import { ProductContext } from '../../../context/ProductContext';
import TemporaryDrawer from "./menuMobile";
import  FixedBottomNavigation from './bottomNav';

const Header = () => {
  const {addToCart} = useContext(ProductContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const headerStyle = {
    backgroundColor: scrolled ? 'white' : 'transparent',
  };

  return (
    <div className='Header' style={headerStyle}>
        <div className='headerLogo'>
            <NavLink to={"/"}>
            <img src={logoImage} className='headerImg' style={{width:"10rem"}} alt='logoImage'/>
                </NavLink>     
        </div>
        <div className='headerLinks'>
            <NavLink activeClassName="active-link" className="navLink" to={"/"}>Home</NavLink>
            <NavLink activeClassName="active-link" className="navLink" to={"/shop"}>Shop</NavLink>
            <NavLink activeClassName="active-link" className="navLink" to={"/about"}>About</NavLink>
            <NavLink activeClassName="active-link" className="navLink" to={"/contact"}>Contact</NavLink>
        </div>
        <div className='headerIcons'>
            <NavLink className="iconDivLink notCart"  to={'/'}><div className='iconDiv'><BsSearch style={{fontSize:"1.8rem"}} /></div></NavLink>
            <NavLink className="iconDivLink notCart"  to={"/"}><div className='iconDiv'><BsPerson /></div></NavLink>
            <NavLink className="iconDivLink cartIconLink" to={"/cart"}><div className='iconDiv'><BsCart /><span className='cartLength'>{addToCart.length}</span></div></NavLink> 
        </div>
        <div className='mobileDrawer'>
          <TemporaryDrawer />
        </div>
        <div className='botNav'>
          <FixedBottomNavigation/>
        </div>
    </div>
  )
}

export default Header;