import ItemCount from './ItemCount'
import '../styles/itemDetail.scss'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContex } from '../context/cartContext'

// TO-DO
// Componente con botones Finalizar compra, seguir comprando
// Importar funcion isInCart y probarla
// if isInCart === true => item.cantidad ??
// else addItemTocart

export default function ItemDetail({ID, nombre, img, precio, descripcion, stock}) {
    let [productoCantidad, setProductoCantidad] = useState(null)
    const {addItemToCart, isInCart, productosEnCarrito} = useContext(cartContex)

    function onAdd() {
        const cantidad = document.getElementsByClassName('productDetail__count')
        setProductoCantidad(productoCantidad = cantidad[0].innerHTML)
    }
    

    return (
        <article className="productDetail">
            <div className="productDetail__img-container" >
                <img src={img} alt="" />
            </div>
            <div className="productDetail__body">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <span>${precio}</span>
            </div>
            {productoCantidad > 0 ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={stock} onClick={() => {onAdd(); addItemToCart(ID, nombre, productoCantidad, img, precio)}} />} 
        </article>
    )
} 