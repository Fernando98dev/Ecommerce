'use client'
import { CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";


interface Props{
    quantity: number;
    onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
    //const [count, setCount] = useState(quantity);
    
    const onValueChange = (value: number) =>{
        if(quantity + value < 1) return;

        if(quantity + value > 5) return;

        //setCount( count + value );
        onQuantityChanged(quantity + value);
    }
  return (
    <div className="flex">
        <button onClick={() => onValueChange(-1)}>
           <IoRemoveCircleOutline size={30}/>
        </button>

        <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
            { quantity }
        </span>

        <button onClick={() => onValueChange(1)}>
           <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}
