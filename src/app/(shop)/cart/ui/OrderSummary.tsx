'use client'

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import { currencyFormat } from '../../../../utils/currencyFormat';

export const OrderSummary = () => {
    const {subTotal, tax, total, itemsInCard} = useCartStore(state => state.getSummaryInformation());
    const [loaded, setLoaded] = useState(false);
    

    useEffect(() => {
       setLoaded(true);
    },[])

    if(!loaded) return <p>Loading...</p>
    
  return (
    <div className="grid grid-cols-2">
              <span>No. Products</span>
              <span className="text-right">{itemsInCard === 1 ? '1 Articulo': `${itemsInCard} Articulos`}</span>

              <span>Subtotal</span>
              <span className="text-right">{currencyFormat(subTotal)}</span>

              <span>Tax (15%)</span>
              <span className="text-right">{currencyFormat(tax)}</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
            </div>
  )
}
