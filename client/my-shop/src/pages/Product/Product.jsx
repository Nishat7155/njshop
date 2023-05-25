import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import { addToCart } from '../../redux/cartReducer';


const Product = () => {

  const [selectedImg, setSelectedImg]= useState(0);
  const [quantity, setQuantity]= useState(1);

  const images =[
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80 ",
    "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
  ];
 
  return (
   <div className='product'>
     
       <div className="left">
        <div className="images">
           <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
           <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
       </div>
       <div className="mainImg">
         <img src={images[selectedImg]} alt="" />
         
       </div>
     </div>
     <div className="right">
     <h1></h1>
      <span className='price'>SEK 199</span>
      <p>
       The model is 162 cm tall and wears size X-Small.
            -Top from NJShop Trend
            -Stretchy material
            -Round neckline
            -Long sleeve
      </p>
      <div className='quantity'>
        <button onClick={()=>setQuantity(prev =>prev ===1 ? 1 : prev-1)}> 
          -
        </button>
         {quantity}
        <button onClick={()=>setQuantity(prev =>prev ===1 ? 1 : prev+1)}>
          +
        </button>
      </div>
        <button className='add'>
            <AddShoppingCartIcon /> Add To Cart
     
        </button>
      
      <div className='link'>
        <div className="item">
             <FavoriteBorderIcon /> Add To Wish List
        </div>
        <div className="item">
             <BalanceIcon /> Add to Compare
        </div>
      </div>
      
      <div className="info">
        <span>Vendor: Polo</span>
        <span>Product Type: Sweat-shirt</span>
        <span>Tag: t-shirt, women, men, top</span>
      </div>
      <hr />
      <div className="details">
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFO</span>
        <hr/>
        <span>FAQ</span>
      </div>
    </div>
   


    
   </div>
 );
};
export default Product;
