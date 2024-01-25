import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {productSuccess } from './CartSlice'
import cartItem from './cartItem'
import { FaRegStar,FaRegCopyright } from "react-icons/fa";
import Spinner from './Spinner';

const CartContainer = () => {
  const [loading,setLoading]=useState(true)
  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500)
    dispatch(productSuccess(cartItem))
  })
  return (
    <>
    {loading?<Spinner/>:(
      <>
    <h1 className='heading'>Our trending products</h1>
    <div className='card-container'>
        {cartItems.map((product)=>{
          return (
            <div className='card' key={product.id}>
            <div className='image-container'>
            <img src={product.img} alt={product.productName}/>
            </div>
            <div className='text-container'>
            <p className='type'>{product.type}</p>
            <h3 className='productName'>{product.productName}</h3>
            <a href='#' className='rating'>{product.ratings} <FaRegStar className='RegStar' /></a>
            <p className='price'>{product.price}</p>
            </div>
            </div>
          )
        })}
      </div>
      <footer>
        <h4><FaRegCopyright style={{position:"relative",top:"2px"}}/> 2024 Dribble. Inc. All rights reserved.</h4>
      </footer>
      </>
       )}
    </>

  )
}

export default CartContainer