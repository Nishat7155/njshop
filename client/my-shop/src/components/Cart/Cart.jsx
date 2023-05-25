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

 const data=[
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80 ",
    img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    title: "Skirt" ,
    desc: "Sweat shirt yellow color",
    isNew: true,
    oldPrice: 699, 
    price: 250,


  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    img2: "https://images.unsplash.com/photo-1680263547745-4e0555920ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    title: "Jacket" ,
    desc: "Winter jacket, outwear",
    oldPrice: 399, 
    price: 152,


  },
 ]
  return (
   <div className='cart'>Cart
     <h1>Products in your cart</h1>
     {data?.map((item) => (
       <div className="item" key={item.id}>
         <img  src={item.img}/>
         <div className="details">
           <h1>{item.title}</h1>
           <p>{item.desc?.substring(0,100)}</p>
           <div className="price">1 x {item.price} SEK</div>
         </div>
         <DeleteOutlineIcon  className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
       </div>
     ))}
    <div className="total">
      <span>TOTAL</span>
      <span>402 SEK</span>
    </div>
    <button onClick={handlePayment}>Go to Checkout</button>
    <span className="reset" onClick={() => dispatch(resetCart())}>
     Reset Cart
    </span>
   </div>
 )
}
export default Cart;
