import { createContext, useState } from "react";

export const cartContex = createContext([])

export function CartContexProvider({children}) {
    const [productosEnCarrito, setProductosEnCarrito] = useState([])
    
    
    // add => crea un objeto newProd, y lo agrega a productosEnCarrito => ? correr isInCart  
    function addItemToCart(ID, item, qt, img, precio) {
        const newProd = {
            ID: ID,
            nombre: item,
            cantidad: qt,
            img: img,
            precio: precio,
        }
        setProductosEnCarrito([...productosEnCarrito, newProd])
    }


    // remove => Filtra productosEnCarrito, devolviendo todos aquellos productos que su idea no sea el dado 

    function removeItemFromCart(ID) {
        setProductosEnCarrito(productosEnCarrito.filter(aEliminar => aEliminar.ID != ID))
    }

    // is in cart
    function isInCart(param) {
        return productosEnCarrito.some(item => item.nombre === param)
    }
    // clear => setProductosEnCarrito a un array vacio
    function clearCart() {
        setProductosEnCarrito([])
    }
    return(
        <cartContex.Provider value={{productosEnCarrito, addItemToCart, removeItemFromCart, clearCart, isInCart}}>
            {children}
        </cartContex.Provider>
    )
}