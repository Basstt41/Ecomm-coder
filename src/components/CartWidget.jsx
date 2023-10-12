import { cartContex } from "../context/cartContext"
import cart from "/cart.svg"
import '../styles/CartWidget.css'
import { useContext } from "react"

const CartWidget = () => {
    const constextoCarrito = useContext(cartContex)

    
    return (
        <div>
            <img src={cart} alt="cart-icon" />
            <p className="cartCount">{constextoCarrito.productosEnCarrito.length}</p>
        </div>
    )
}

export default CartWidget