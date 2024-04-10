import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { Pagination, ProductGrid } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
 

 
interface Props{
  params:{
    gender: string;
  }
}
 
export default async function({params}:Props) {
 
  const {gender} = params;
  const {products, totalPages} = await getPaginatedProductsWithImages({gender});
 
  //if(id === 'kids'){
      //notFound();
  //}
  if(gender === 'kid'){
    return (
      <div>
        <h1>Articulos para Niños</h1>
        
        {
          <ProductGrid products={products.filter((product)=> product.gender.includes("kid"))} />
        }
        <Pagination totalPages={totalPages}/>
      </div>
    );
  }
 
  if(gender === 'men'){
    return (
      <div>
        <h1>Articulos para Hombres</h1>
        
        {
          <ProductGrid products={products.filter((product)=> product.gender.includes("men"))} />
        }
        <Pagination totalPages={totalPages}/>
      </div>
    );
  }
  if(gender === 'women'){
    return (
      <div>
        <h1>Articulos para Mujeres</h1>
        
        {
          <ProductGrid products={products.filter((product)=> product.gender.includes("women"))} />
        }
        <Pagination totalPages={totalPages}/>
      </div>
    );
  }
  
  
}