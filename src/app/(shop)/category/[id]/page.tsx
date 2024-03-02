import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";

const products = initialData.products;

interface Props{
  params:{
    id: Category;
  }
}

/* eslint-disable react/display-name */
export default function({params}:Props) {

  const {id} = params;

  //if(id === 'kids'){
      //notFound();
  //}
  if(id === 'kid'){
    return (
      <div>
        <Title 
         title="Articulos para Niños"
         subtitle="todos los productos"
         className="mb-2"/>
        
        {
          <ProductGrid products={products.filter((product)=> product.gender.includes("kid"))} />
        }
      </div>
    );
  }

  if(id === 'men'){
    return (
      <div>
        
        <Title 
         title="Articulos para Hombres"
         subtitle="todos los productos"
         className="mb-2"/>

        {
          <ProductGrid products={products.filter((product)=> product.gender.includes("men"))} />
        }
      </div>
    );
  }
  if(id === 'women'){
    return (
      <div>
        <Title 
         title="Articulos para Mujeres"
         subtitle="todos los productos"
         className="mb-2"/>
        
        {
          <ProductGrid products={products.filter((product)=> product.gender.includes("women"))} />
        }
      </div>
    );
  }
  
  
}