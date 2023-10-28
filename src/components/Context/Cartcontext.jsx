import { createContext, useEffect, useState } from "react";



export const CartContext = createContext(); 


const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartInicial);

    const addCart = (item, number) => { 
        const itemAdded = {...item, number};
  
        const nuevoCart = [...cart];
        const estaAgregado = nuevoCart.find((item) => item.id === itemAdded.id);
  
        if(estaAgregado) {
            estaAgregado.number += number;
        } else {
            nuevoCart.push(itemAdded);
        }
        setCart(nuevoCart);
    }
  
    const quantityCart = () => {
        return cart.reduce((acc, prod) => acc + prod.number, 0);
    }
  
    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.number, 0);
    }

    const vaciarCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]) 

    return (
    <CartContext.Provider value={{cart, addCart, quantityCart, totalPrice, vaciarCart}}>
        {children}
    </CartContext.Provider>)

}