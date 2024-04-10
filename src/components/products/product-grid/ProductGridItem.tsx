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
    <div className="rounded-md overflow-hidden fade-in">
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

     <div className='p-4 flex flex-col'>
        <Link
        className="hover:text-blue-600" 
        href={`/product/${product.slug}`}>{product.title}</Link>
        <span className="font-bold">${product.price}</span>
     </div>
    </div>
  )
}
