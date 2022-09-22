import React, { useContext } from 'react'
import {Cart} from './Cart'
import {AiOutlineShopping} from 'react-icons/ai';
import Link from 'next/link';
import CartContext from '../context/CartContext';
export const Navbar = () => {
  const {showCart , setShowCart , totalQuantity} = useContext(CartContext);
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
           HeadPhone E-commerce
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>{setShowCart(true)}}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantity}</span>
      </button>
      {showCart&&<Cart/>}
    </div>
  )
}
