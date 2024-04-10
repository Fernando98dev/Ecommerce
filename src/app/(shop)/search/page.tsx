import { getPaginatedProductsWithImages, getProductBySlug, getProductsByTitleWithImages } from "@/actions";
import { Pagination, ProductGrid } from "@/components";
import { redirect } from "next/navigation";

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string,
      page?: string
    };
  }) {
    const query = searchParams?.query || '';
    const page = searchParams?.page ? parseInt(searchParams.page): 1;

    const {products} = await getProductsByTitleWithImages({page,query});
    
    //const filterProducts = products.filter((p)=> p.title.includes(query));

    if(!products){
        redirect("/not-found");
    }

    if(products){
        //console.log({currentPage, filterProducts});
        return (
            <>
            
              <ProductGrid
              products={products}/> 
              
              
            </>
            
            
          
        );
    }
    
  
  
}