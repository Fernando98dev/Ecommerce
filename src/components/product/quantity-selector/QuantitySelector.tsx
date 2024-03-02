'use client'
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props{
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity);

    const onQuantityChange = (value: number) =>{
        if(count + value < 1) return;

        if(count + value > 5) return;

        setCount( count + value );
    }
  return (
    <div className="product-page__quantity-selector">
        <button onClick={() => onQuantityChange(-1)}>
           <IoRemoveCircleOutline size={30}/>
        </button>

        <span className="quantity-selector__counter">
            { count }
        </span>

        <button onClick={() => onQuantityChange(1)}>
           <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}
