import ItemDetail from "./itemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default function ItemDetailContainer () {
    const [produc, setProduc] = useState([])
    const {producto} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refProducto = doc(db, 'productos', producto)

        getDoc(refProducto).then(response => {
            if(response.exists()) {
                setProduc({ID: response.id, ...response.data()})
            }
        })
        console.log(produc)
    }, [producto])

    const productoPros = {
        ID: produc.ID,
        nombre: `${produc.nombre}`,
        img: `${produc.img}`,
        precio: `${produc.precio}`,
        descripcion: `${produc.descripcion}`,
        stock: `${produc.stock}`
}
    return (
        <>
            <h1>Probando</h1>
            <ItemDetail {...productoPros} />
        </>
    )
}