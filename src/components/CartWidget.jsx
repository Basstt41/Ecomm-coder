import ItemListContainer from "./ItemListContainer"

const cartSvg = 'https://www.svgrepo.com/show/80543/shopping-cart-outline.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cartSvg} alt="cart-icon" />
            <p>0</p>
        </div>
    )
}

export default CartWidget