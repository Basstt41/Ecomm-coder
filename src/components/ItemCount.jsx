import { useState } from "react"

export default function ItemCount({stock, onClick}) {
    const [cantidad, setCantidad] = useState(1)

    function addProd() {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        } else {alert('La cantidad seleccionada supera el stock disponible')}
    }
    function resProd() {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="productDetail__buttons-container">
            <button onClick={resProd}>-</button>
            <span className="productDetail__count">{cantidad}</span>
            <button onClick={addProd}>+</button>
            <button className="btn-add" onClick={onClick}>Agregar al Carrito</button>
        </div>
    )
}