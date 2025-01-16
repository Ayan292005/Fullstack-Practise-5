import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
        <div className='flex justify-between container py-10 flex-wrap'>
          <div className='flex gap-2 items-center'>
            <label htmlFor="search"><i className="fa-solid fa-magnifying-glass" style={{ fontSize: "15px" }}></i></label>
            <input type="search" name='search' placeholder='search' className='search' />
          </div>
          <a href='#' className='logo'>SHOPPERS</a>
          <div className='flex gap-4 items-center'>
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <hr />

      <div className='flex justify-center gap-5 py-5'>
        <NavLink to="/home" style={{color:" #868995",textTransform:"uppercase"}}>Home</NavLink>
        <NavLink to="/products" style={{color:" #868995",textTransform:"uppercase"}}>Products</NavLink>
        <NavLink to="/add" style={{color:" #868995",textTransform:"uppercase"}}>AddProduct</NavLink>
      </div>
    </>
  )
}

export default Navbar
