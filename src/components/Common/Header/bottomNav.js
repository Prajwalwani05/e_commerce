import * as React from 'react';
import Box from '@mui/material/Box';
import "./style.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import  {BsSearch}  from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export default function FixedBottomNavigation() {
    const {addToCart} = useContext(ProductContext);

    const style = {
        color:"black",
    }
  return (
    <Box className="bottomNav" sx={{ pb: 7 }} >
      {/* <CssBaseline /> */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
         
        >
         <NavLink to={"/"}><BottomNavigationAction label="Search" icon={<BsSearch style={style}/>} /></NavLink> 
          <NavLink to={'/profile'}><BottomNavigationAction label="Profile" icon={<BsPerson  style={style} />} /></NavLink>
         <NavLink to={"/cart"}><BottomNavigationAction label="Cart" icon={<div><BsCart  style={style}/><span className='cartLength'>{addToCart.length}</span></div> } /></NavLink> 
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
