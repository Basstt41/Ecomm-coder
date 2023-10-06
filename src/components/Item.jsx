import '../styles/item.scss'
import { Link } from 'react-router-dom'

export default function Item({nombre, categoria, img, precio, stock, ID}) {

    return (
        <div className="productCard">
            <img src={img} alt="Imagen del producto" style={{width: 200}} />
            <div className="productCard__text">
                <h3>{nombre}</h3>
                <span>${precio}</span>
                <button><Link to={`/detalle/${ID}`}>Add To Cart</Link></button>
            </div>
        </div>
    )
}
