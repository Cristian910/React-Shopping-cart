//contexto:variables globales para acceder en todo el contexto
import { createContext, useState } from "react";
//crear contexto
export const CartContext = createContext()
//crear provider
export function CartProvider({children}) {
    const [cart,setCart] = useState([])
//add
    const addToCart = product => {
        const productInCart = cart.findIndex(item => item.id === product.id)

        if(productInCart >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            return setCart(newCart)
        }
        setCart(previousState => [
            ...previousState,
            {...product,
            quantity: 1}
        ])
    }
//remove
    const removeProduct = product => {
        const newCart = structuredClone(cart)
        const productInCart = cart.findIndex(item => item.id === product.id)
        if(product.quantity > 1) {
            newCart[productInCart].quantity -= 1
            return setCart(newCart)
        }
        
        setCart(previousState => previousState.filter(item => item.id !== product.id))
    }
//clear
    const clearCart = ()=> {
    setCart([])
    }
    return(
        <CartContext.Provider value={{cart,addToCart,clearCart,removeProduct}}> 
            {children}
        </CartContext.Provider>
    )
}

