import { useContext } from "react"
import { cartContex } from "../context/cartContext"
import { Link } from "react-router-dom"

export default function Cart() {
    const {productosEnCarrito, removeItemFromCart, clearCart} = useContext(cartContex)
    
    return (
        <main>
            {productosEnCarrito.length > 0 ? <div>
                {productosEnCarrito.map((item) => {
                    return(
                        <article key={item.ID}>
                            <div>
                                <h2>{item.nombre}</h2>
                                <p>${item.precio * item.cantidad}</p>
                                <button onClick={() => {removeItemFromCart(item.ID)}}>Eliminar</button>    
                            </div>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                        </article>
                    )
                })}
                <div>
                    <button onClick={() => {clearCart()}}>Limpiar carrito</button>
                    <Link to="/checkout">Finalizar</Link>
                </div>
                

            </div> : <main><h2 style={{color: '#fff'}}>El carrito esta vacio</h2></main>}
        </main>
    )
}