import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props{
  params:{
    slug: string;
  }
}

/* eslint-disable react/display-name */
export default function({params}: Props) {
  const {slug} = params;
  const product = initialData.products.find(product => product.slug === slug);

  if(!product){
     notFound();
  }
  return (
    <div className="product-page__container">

      {/*Mobile Slideshow */}
        <ProductMobileSlideshow
        title={product.title}
        images={product.images}
        className="block md:hidden"/>
      {/* Desktop Slideshow */}
      <div className="product-page__slideshow">
        <ProductSlideshow title={product.title} images={product.images}
        className="hidden md:block"/>
      </div>

      {/*Detalles */}
      <div className="product-page__details">
        <h1 className={`${titleFont.className} product-page__title`}>
          {product.title}
        </h1>
        <p className="product-page__price">$ {product.price}</p>
        {/*selector de tallas */}
        <SizeSelector selectedSize={product.sizes[0]}
        availableSizes={product.sizes}/>
        {/*selector de cantidad */}
        <QuantitySelector quantity={1} />
        {/*buton */}
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/*descripcion */}
        <h3 className="product-page__description">descripcion</h3>
        <p className="description__text">{product.description}</p>
      </div>
      
    </div>
  );
}