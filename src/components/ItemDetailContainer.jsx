import ItemDetail from "./itemDetail";
import productos from "../assets/productos.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function productosMockApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
        
    })
}


export default function ItemDetailContainer () {
    const [produc, setProduc] = useState([])
    const {producto} = useParams()

    useEffect(() => {
        productosMockApi()
            .then(res => res.filter(item => item.ID == producto))
            .then(obj => setProduc(...obj))
    }, [producto])

    const productoPros = {
        nombre: `${produc.nombre}`,
        img: `${produc.img}`,
        precio: `${produc.precio}`,
        stock: `${produc.stock}`
}
    return (
        <>
            <h1>Probando</h1>
            <ItemDetail {...productoPros} />
        </>
    )
}