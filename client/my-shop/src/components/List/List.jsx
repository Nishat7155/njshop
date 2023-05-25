import React from 'react'
import Card from '../Card/Card';
import "./List.scss"



const List = () => {


  const data =[
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80 ",
      img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Summer hoodie" ,
      isNew: true,
      oldPrice: 699, 
      price: 250,
  
  
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      img2: "https://images.unsplash.com/photo-1680263547745-4e0555920ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Winter Jacket for men" ,
      oldPrice: 399, 
      price: 152,
  
  
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1680925714738-0ff0edabfbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80 ",
      img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Summer dress " ,
      isNew: true,
      oldPrice: 599, 
      price: 299,
  
  
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1681097211196-de7d4c7feadb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      img2: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Summer short dress" ,
      isNew: true,
      oldPrice: 499, 
      price: 199,
  
  
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1669409054015-0fc5aa093b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      img2: "https://images.unsplash.com/photo-1552323356-322f06b49db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1521&q=80",
      title: "Summer Blazeer black color" ,
      isNew: true,
      oldPrice: 559, 
      price: 300,
  
  
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1680263547745-4e0555920ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Summer dress in blue bottom" ,
      isNew: true,
      oldPrice: 590, 
      price: 259,
  
  
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      img2: "https://images.unsplash.com/photo-1680263547745-4e0555920ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Winter Jacket for men" ,
      isNew: true,
      oldPrice: 290, 
      price: 125,
  
  
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1680925714738-0ff0edabfbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80 ",
      img2: "https://images.unsplash.com/photo-1613569973485-c6ecb241be47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ",
      title: "Summer dress " ,
      isNew: true,
      oldPrice: 599, 
      price: 299,
  
  
    },
    
  ]
 


 return (
   <div className="list">
     {data?.map(item=>(
      <Card item ={item} key ={item.id} />
     ))}
   </div>
 );
};
export default List;
