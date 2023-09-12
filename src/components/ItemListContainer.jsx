import productos from '../assets/productos.json'
import { useEffect, useState } from "react"
import Item from './Item'
import '../styles/loader.css'
import { useParams } from 'react-router-dom'



function productosMockApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}

const ItemListContainer = () => {

    const [prod, setProd] = useState([])
    const {categoria} = useParams()
    console.log(categoria)

    useEffect(() => {
        if(!categoria){
            productosMockApi().then(res => setProd(res))
        } else {
            productosMockApi()
                .then(res => res.filter(item => item.categoria === categoria))
                .then(filtrado => setProd(filtrado))
        }
        
    },['', categoria])

    
    if(prod.length === 0) {
        return <span className="loader"></span>
    }
    return(
        <>
            <h1>Productos</h1>
            <section>
                {prod.map((item) => {
                    return (
                        <Item key={item.ID} ID={item.ID} img={item.img} nombre={item.nombre} precio={item.precio} categoria={item.categoria} stock={item.stock}   />
                    )
                })}
            </section>
        </>
    )
}


export default ItemListContainer