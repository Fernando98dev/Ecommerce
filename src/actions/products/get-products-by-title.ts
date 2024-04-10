'use server'

import prisma from "@/lib/prisma"
import { Gender} from '@prisma/client';

interface PaginationOptions {
    page?:number;
    query?: string;
    gender?: string;
}
export const getProductsByTitleWithImages = async({
    page = 1,
    query,
    gender
}: PaginationOptions) =>{
    if(isNaN(Number(page))) page = 1
    if(page < 1) page = 1
    
   try {
    //1. Obtener los productos
    const products = await prisma.product.findMany( {
        include: {
          ProductImage: {
            take: 2, // solo tomar 2 imagenes
            select: {
              url: true
            },
          },
          
        },
        
        //skip: ( page - 1 ) * 6,
        //take: 6,
        //! Por género
        
      } );

      const filterProducts = products.filter((p)=> p.title.includes(query!)) || products.filter((p)=> p.tags.includes(query!)) || products.filter((p) => p.gender.includes(query!));
      
      //2.obtener el total de paginas

   // const totalCount = filterProducts.length;
   // console.log({totalCount});
   // const totalPages = Math.ceil(totalCount/2);
   



    return {
        //totalPages: totalPages,
        products: filterProducts.map(product => ({
            ...product,
            images: product.ProductImage.map(image => image.url)
        }))
    }
    
   } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
   }
}