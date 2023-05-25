import React from 'react'
import "./Categories.scss"
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src='https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt=''/>
        <button>
          <Link className='link' to="/products/1">
            Sale
          </Link>
        </button>
        </div>
        <div className="row">
          <img src='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt=''/>
          <button>
            <Link className='link' to="/products/1">
               Women
            </Link>
          </button> 
        
        </div>
      </div>
      <div className="col">
         <div className="row">
         <img src='https://images.pexels.com/photos/5889717/pexels-photo-5889717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt=''/>
          <button>
            <Link className='link' to="/products/1">
               New Season
            </Link>
          </button> 
         </div>
      </div>
      <div className="col col-l">
         <div className="row">
          <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/10365584/pexels-photo-10365584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt=''/>
          <button>
            <Link className='link' to="/products/1">
               Men
            </Link>
          </button> 
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt=''/>
          <button>
            <Link className='link' to="/products/1">
               Accessories
            </Link>
          </button> 
            </div>
          </div>
         </div>
         <div className="row">
         <img src='https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt=''/>
          <button>
            <Link className='link' to="/products/1">
               Shoes
            </Link>
          </button> 
         </div>
      </div>
    </div>
  )
}
export default Categories