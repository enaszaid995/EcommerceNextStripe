import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
export const Product = (props) => {
  return (
    <div>
      <Link href={`/product/${props.product.slug.current}`}>
      
        <div className='product-card'>
          <img src={urlFor(props.product.image && props.product.image[0])}
               width={250}
               height={250}/>
          <p className='product-name'>
            {props.product.name}
          </p>
          <p className='product-price'>
            ${props.product.price}
          </p>
        </div>
      
      
      
      </Link>
    </div>
  )
}
