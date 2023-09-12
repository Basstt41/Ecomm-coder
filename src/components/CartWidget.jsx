import ItemListContainer from "./ItemListContainer"
import '../styles/CartWidget.css'

const cartSvg = 'https://www.svgrepo.com/show/80543/shopping-cart-outline.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cartSvg} alt="cart-icon" />
            <p className="cartCount">0</p>
        </div>
    )
}

export default CartWidget