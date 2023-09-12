import { useState } from 'react'
import '../styles/item.css'
import { Link } from 'react-router-dom'

export default function Item({nombre, categoria, img, precio, stock, ID}) {

    return (
        <div className="productCard">
            <img src={img} alt="Imagen del producto" style={{width: 200}} />
            <div className="productCard__text">
                <h4>{nombre}</h4>
                <Link to={`/productos/${categoria}`}>{categoria}</Link>
                <span>${precio}</span>
                <span>{stock}</span>
                <button><Link to={`/detalle/${ID}`}>Add To Cart</Link></button>
            </div>
        </div>
    )
}
