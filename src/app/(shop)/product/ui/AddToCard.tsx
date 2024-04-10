'use client'

import { SizeSelector, QuantitySelector } from '@/components'
import { CartProduct, Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';
import React, { useState } from 'react'

interface Props{
    product: Product;
}
export const AddToCard = ({product}: Props) => {
    const addProductToCart = useCartStore(state => state.addProductToCart);
    const [quantity, setQuantity] = useState<number>(1);
    const [size, setSize] = useState<Size|undefined>();
    const [posted, setPosted] = useState(false);

    const addToCard = () =>{
        setPosted(true);

        const cartProduct: CartProduct = {
          id: product.id,
          slug: product.slug,
          title: product.title,
          price: product.price,
          quantity: quantity,
          size: size,
          image: product.images[0]
        }
        addProductToCart(cartProduct);
        setPosted(false);
        setQuantity(1);
        setSize(undefined);
        if(!size) return;
        console.log({size, quantity});
    }
  return (
    <>
    {posted && !size &&(
        <p className='mt-2 text-red-500 fade-in'> Debe seleccionar una talla</p>
    )}
    
     {/*selector de tallas */}
     <SizeSelector selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}/>
        {/*selector de cantidad */}
        <QuantitySelector quantity={quantity}
      onQuantityChanged={setQuantity}        
        
        />
        {/*buton */}
        <button 
        onClick={addToCard}
        className="btn-primary my-5">Agregar al carrito</button>
    </>
  )
}
