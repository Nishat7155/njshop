import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from "../../makeRequest";




const Cart = () => {
 const products = useSelector(state=>state.cart.products);
 const dispatch = useDispatch();


 const totalPrice = ()=>{
   let total = 0
   products.forEach((item)=>( total += item.quantity * item.price));
   return total.toFixed(2);
 };


 const stripePromise = loadStripe('pk_test_51MKUJIIKkWbTPK4J0WrJhnP8DB8Z4weJpgfVhQoeQWqUXL34uNelm3ebDMT3vsoXcuex6KKGBW69CfG9iNP5G9MO00GiZGhnJE');


 const handlePayment = async()=>{
   try{
     const stripe = await stripePromise;


     const res = await makeRequest.post("/orders", {
       products,
     });


     await stripe.redirectToCheckout({
       sessionId:res.data.stripeSession.id,
     })
   }catch(err){
     console.log(err)
   }
 }
  return (
   <div className='cart'>Cart
     <h1>Products in your cart</h1>
     {products?.map((item) => (
       <div className="item" key={item.id}>
         <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
         <div className="details">
           <h1>{item.title}</h1>
           <p>{item.desc?.substring(0,100)}</p>
           <div className="price">{item.quantity} x {item.price} SEK</div>
         </div>
         <DeleteOutlineIcon  className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
       </div>
     ))}
    <div className="total">
      <span>TOTAL</span>
      <span>{totalPrice()} SEK</span>
    </div>
    <button onClick={handlePayment}>Go to Checkout</button>
    <span className="reset" onClick={() => dispatch(resetCart())}>
     Reset Cart
    </span>
   </div>
 )
}
export default Cart;
