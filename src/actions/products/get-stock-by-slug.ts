'use server'

import prisma from "@/lib/prisma";
//import { sleep } from "@/utils";


export const getStockBySlug = async(slug: string) =>{

    try {

       //await sleep(3);

        const product = await prisma.product.findFirst({
            where:{
                slug: slug,
            }
            //select:{inStock: true} como lo hizo fernando
        })

        if(!product) return 0;

        return product.inStock
        
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener el stock por slug");
    }

}