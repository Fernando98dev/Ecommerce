import { Product } from '@/interfaces'
import React from 'react'
import { ProductGridItem } from './ProductGridItem';

interface Props {
    products: Product[];
}

export const ProductGrid = ({products}:Props) => {
  return (
    <div className='products__container'>
        {
            products.map(product =>(
                <ProductGridItem key={product.slug}
                product={product}/>
            ))
        }
    </div>
  )
}
