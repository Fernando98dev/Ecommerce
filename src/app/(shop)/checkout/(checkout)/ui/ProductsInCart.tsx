'use client'


import { useCartStore } from "@/store"
import Image from "next/image";

import { currencyFormat } from '../../../../../utils/currencyFormat';
import { ProductImage } from "@/components";

export const ProductsInCart = () => {
  
    const productsInCart = useCartStore(state => state.cart);
  return (
    <>
    {
            productsInCart.map(product =>(
              <div key={product.slug} className="flex">
                <ProductImage src={product.image}
                width={100}
                height={100}
                style={{
                  width: '100px',
                  height: '100px'
                }}
                alt="image"
                className="mr-5 rounded"/>

                <div>
                  <span>
                     {product.size} - {product.title} ({product.quantity})
                  </span>
                  <p className="font-bold">{currencyFormat(product.price * product.quantity)}</p>
                  

                  
                </div>
              </div>
            ))
          }
    
    </>
  )
}
