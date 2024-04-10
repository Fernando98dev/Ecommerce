import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State{
    clearCart: any;
    cart: CartProduct[];

    getTotalItems: () => number;
    
    getSummaryInformation: () => {
         subTotal: number;
    tax: number;
    total: number;
    itemsInCard: number;
    }
    addProductToCart: (product: CartProduct) =>void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void
    removeProduct: (product: CartProduct) => void

    //clearCart: () => void;

}

export const useCartStore = create<State>()(
    persist(
        (set, get) =>({
            cart: [],

            getTotalItems: () =>{
                const { cart } = get();
                return cart.reduce((total, item)=> total + item.quantity, 0);
            },

            getSummaryInformation: () =>{
                const { cart } = get();

                const subTotal = cart.reduce(
                    (subTotal, product) => product.quantity * product.price + subTotal,
                    0
                );
                const tax = subTotal * 0.15;
                const total = subTotal + tax;
                const  itemsInCard = cart.reduce((total, item)=> total + item.quantity, 0);

                return{
                    subTotal,
                    tax,
                    total,
                    itemsInCard
                }
            },
    
            addProductToCart: (product: CartProduct) =>{
                const {cart} = get();//sacar el cart del estado actual
    
                //1.revisar si el producto existe con la talla seleccionada
                const productInCart = cart.some(
                    (item) => (item.id === product.id && item.size === product.size)
                );
    
                if(!productInCart){
                   set({cart: [...cart, product]});
                   return;
                }
    
                //2.Se que el producto existe por talla ahora lo incremento
                const updatedCartProducts = cart.map((item) => {
                    if(item.id === product.id && item.size === product.size){
                        return{...item, quantity: item.quantity + product.quantity}
                    }
    
                    return item;
                });
    
                set({cart: updatedCartProducts});
            },
            updateProductQuantity: (product: CartProduct, quantity: number) =>{
                const {cart} = get();
                const updatedProductQuantity = cart.map((item) => {
                    if(item.id === product.id && item.size === product.size){
                        return{...item, quantity: quantity}
                    }
    
                    return item;
                });
    
                set({cart: updatedProductQuantity});
            },

            removeProduct: (product: CartProduct) => {
                const {cart} = get();

                const removedProduct = cart.filter((item) => item.id !== product.id || item.size !== product.size);
                
               

                set({cart: removedProduct});
            },

            clearCart: () => {
                set({ cart: [] });
              },
        }),

        
        
        {
            name: 'shopping-cart'
        }

    )
)

