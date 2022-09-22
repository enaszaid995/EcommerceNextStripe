import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import {BsBagCheckFill} from 'react-icons/bs';
import CartContext from '../context/CartContext';
import { runFireworks } from '../lib/utils';
 const Success = () => {
    const{setItems,setTotalPrice,setTotalQuantities}=useContext(CartContext);
    
    useEffect(()=>{
        localStorage.clear();
        setItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>
                Thank You For Your Purchases
            </h2>
            <p className='email-msg'>
                Check Your Email Inbox for the receipt.
            </p>
            <p className='description'>
                If you have any question , please emailv<a className='email' href='mailto:enaszaid995@gmail.com'>
                    enaszaid995@gmail.com
                </a>
            </p>
            <Link href='/'>
                <button type='button' width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>

        </div>
    </div>
  )
}

export default Success;