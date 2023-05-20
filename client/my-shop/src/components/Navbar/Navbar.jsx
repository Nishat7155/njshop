import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector(state=>state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
         <div className="left">
            <div className="item">
               <img src="/img/se.png" alt="" />
                 <KeyboardArrowDownIcon />
            </div>

            <div className='item'>
                <span>SEK</span>
                <KeyboardArrowDownIcon/>
            </div>
          
             <div className="item">
                 <Link className="link" to ="/products/1">Women</Link>
             </div>

             <div className="item">
                 <Link className="link" to ="/products/2">Men</Link>
             </div>

             <div className="item">
                 <Link className="link" to ="/products/3">Children</Link>
              </div>
          </div>

          <div className='center'>
            <Link className="link" to ="/">NJShop </Link>
          </div>

         <div className='right'>

              <div className='item'>
                 <Link className="link" to ="/">Homepage </Link>
              </div>

              <div className='item'>
                  <Link className="link" to ="/">About </Link>
              </div>

              <div className='item'>
                   <Link className="link" to ="/"> Contact </Link>
              </div>

              <div className='item'>
                  <Link className="link" to ="/">Stores </Link>
              </div>

              <div className="icons">
                <SearchIcon />
                <PersonIcon />
                <FavoriteBorderIcon />
              <div className="cartIcon" onClick={()=>setOpen(!open)}>
                <ShoppingCartIcon/>
                <span>{products.length}</span>
              </div>
            </div>
         </div>

      </div>
      {open && <Cart/>}
    </div>
  );
};
export default Navbar;