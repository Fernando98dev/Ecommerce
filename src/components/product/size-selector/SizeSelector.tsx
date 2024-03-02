import type { Size } from "@/interfaces"
import clsx from "clsx";

interface Props{
    selectedSize: Size;
    availableSizes: Size[];
}

export const SizeSelector = ({selectedSize, availableSizes}: Props) => {
  return (
    <div className="product-page__size-selector">
        <h3 className="size-selector__title">Tallas Disponibles</h3>
        <div className="size-selector__container">
            {
                availableSizes.map(size =>(
                    <button key={size} className={
                        clsx(
                            "size-selector__button",
                            {
                                'underline':size === selectedSize
                            }
                        )
                    }>
                        {size}
                    </button>
                ))
            }
        </div>
    </div>
  )
}
