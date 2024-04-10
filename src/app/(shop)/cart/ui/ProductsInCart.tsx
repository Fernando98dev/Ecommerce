'use client'

import { ProductImage, QuantitySelector } from "@/components";
import { useCartStore } from "@/store"
import Link from "next/link";

export const ProductsInCart = () => {
    const removedProduct = useCartStore(state => state.removeProduct);
    const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
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
                  <Link
                  className="hover:underline cursor-pointer" 
                  href={`/product/${product.slug}`}>
                     {product.size} - {product.title}
                  </Link>
                  <p>$ {product.price}</p>
                  <QuantitySelector quantity={product.quantity}
                  onQuantityChanged={value => updateProductQuantity(product, value)}
                 />

                  <button className="underline mt-5"
                  onClick={()=>removedProduct(product)}>
                    Remover
                  </button>
                </div>
              </div>
            ))
          }
    
    </>
  )
}
