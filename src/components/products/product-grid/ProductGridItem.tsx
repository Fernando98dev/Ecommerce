'use client'
import { Product } from "@/interfaces"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface Props{
    product: Product;
}

export const ProductGridItem = ({product}: Props) => {
    const [displayImage, setDisplayImage] = useState(product.images[0]);
    const handleImageEnter = () =>{
        setDisplayImage(product.images[1]);
    }

    const handleImageLeave = () =>{
        setDisplayImage(product.images[0]);
    }
  return (
    <div className="product-grid__container fade-in">
        <Link href={`/product/${product.slug}`}>
        <Image
        src={`/products/${displayImage}`}
        alt="imagen"
        className="product-grid__image"
        height={500}
        width={500}
        onError={(e) => console.error(e.target)}
        onMouseEnter={handleImageEnter}
        onMouseLeave={handleImageLeave}
        />
        </Link>

     <div className='product-grid__info'>
        <Link
        className="product-grid__link" 
        href={`/product/${product.slug}`}>{product.title}</Link>
        <span className="product-grid__price">${product.price}</span>
     </div>
    </div>
  )
}
