import { useState } from "react";
import '../styles/itemDetail.css'



export default function ItemDetail({nombre, img, precio, stock, categoria}) {
    const [cantidad, setCantidad] = useState(0)

    function addProd() {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        } else {alert('La cantidad seleccionada supera el stock disponible')}
    }
    function resProd() {
        if(cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <article className="productDetail">
            <div className="productDetail__img-container" >
                <img src={img} alt="" />
            </div>
            <div className="productDetail__body">
                <h3>{nombre}</h3>
                <p>Espaciio para descripcion de producto, aun no las hice</p>
                <span>${precio}</span>
                <span>{stock}</span>
            </div>
            <div className="productDetail__buttons-container">
                <button onClick={resProd}>-</button>
                <span>{cantidad}</span>
                <button onClick={addProd}>+</button>
            </div>
        </article>
    )
} 