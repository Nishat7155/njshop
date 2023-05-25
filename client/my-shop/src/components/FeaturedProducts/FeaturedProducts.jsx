import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";


const FeaturedProducts = ({ type }) => {
  /*const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
*/

const data =[
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80 ",
    img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    title: "Casual Hoodie " ,
    oldPrice: 399, 
    price: 199,


  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    img2: "https://images.unsplash.com/photo-1680263547745-4e0555920ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    title: "Winter Jacket for men" ,
    oldPrice: 899, 
    price: 512,


  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1680925714738-0ff0edabfbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80 ",
    img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    title: "Satin Summer Dress " ,
    oldPrice: 699, 
    price: 312,


  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1681097211196-de7d4c7feadb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    img2: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    title: "Satin Summer Dress" ,
    oldPrice: 650, 
    price: 250,


  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1669409054015-0fc5aa093b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
    img2: "https://images.unsplash.com/photo-1552323356-322f06b49db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1521&q=80",
    title: "Coat For summer evening outing" ,
    oldPrice: 499, 
    price: 200,


  },
  
]
 const [products, setProducts]= useState([]);
 useEffect(()=>{
  const fetchData = async()=>{
    try{
     const data = await axios.get(process.env.REACT_APP_API_URL+ "/products",{
      headers:{
        Authorozation: "bearer " + process.env.REACT_APP_API_TOKEN,
      },
     }
    );
     
     console.log();
    }catch(err){
      console.log();
    }
  }
  fetchData();
 },[])
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Welcome to our shopping website, where you can explore a world of trending and exciting products.
        We pride ourselves on curating a wide selection of items that cater to diverse tastes and interests. 
        Whether you're searching for the latest fashion trends,cutting-edge gadgets, or unique home decor, our website 
        offers a vast array of available products to suit every need. Stay ahead of the curve by browsing our trending 
        section,which showcases the most popular and sought-after items of the moment. With our user-friendly interface 
        and seamless shopping experience, finding your perfect purchase has never been easier.Discover the hottest 
        trends and explore a world of possibilities on our shopping website today.

        </p>
      </div>
      <div className="bottom">
        {data?.map((item) => 
        <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;