
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import {client} from '../lib/client';
import {Product} from '../component/Product';
import {HeroBanner} from '../component/HeroBanner';
import {FooterBanner} from '../component/FooterBanner';
import {Navbar} from '../component/Navbar';
import Layout from '../component/Layout';
import { Footer } from '../component/Footer';

  const Home = ({Products,BannerData}) =>{
 
  console.log(BannerData);
  return (
    <>
         
      
     
      <HeroBanner heroBanner={BannerData.length && BannerData[0]}/>
      
      <div className='products-heading'>
          <h2>Heading</h2>
          <p>paragrah heading</p>
      </div>

      <div className='products-container'>
        {Products.map((product)=>
        <Product key={product._id} product={product}/>
        
        )}
      </div>
      <FooterBanner footerBanner={BannerData && BannerData[0]}/>
     
      
    </>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const productquery = '*[_type == "product"]';
  const products = await client.fetch(productquery);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
 
  return{
    props: { 
      Products:products,
      BannerData: bannerData }
  }
  
}