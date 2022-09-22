import '../styles/globals.css';
import React from 'react';
import Layout from '../component/Layout';
import { CartContextProvider } from '../context/CartContext';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
        
    </Layout>
    </CartContextProvider>
    
  )
  
}

export default MyApp
