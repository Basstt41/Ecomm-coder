import { useContext } from "react"
import { cartContex } from "../context/cartContext"
import { Link } from "react-router-dom"

export default function Cart() {
    const {productosEnCarrito, removeItemFromCart, clearCart} = useContext(cartContex)
    console.log(productosEnCarrito)
    
    return (
        <>
            {productosEnCarrito.length > 0 ? <div>
                {productosEnCarrito.map((item) => {
                    return(
                        <div key={item.ID}>
                            <h2>{item.nombre}</h2>
                            <img src={item.img} alt="" />
                            <p>{item.precio * item.cantidad}</p>
                            <button onClick={() => {removeItemFromCart(item.ID)}}>Eliminar</button>
                        </div>
                    )
                })}
                <button onClick={() => {clearCart()}}>Limpiar carrito</button>
                <Link to="/checkout">Finalizar</Link>
                

            </div> : <><h2>El carrito esta vacio</h2></>}
        </>
    )
}