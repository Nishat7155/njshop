import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss";
import { useState } from "react";





const Slider = () => {

const [currentSlide, setCurrentSlide]  = useState(0)

  const data =[
   "https://images.pexels.com/photos/950308/pexels-photo-950308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
   "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};


const nextSlide = () => {
  setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};


  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
        <ArrowBackIosIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
         < ArrowForwardIosIcon/> 
        </div>
      </div>
    </div>
  )
}
export default Slider