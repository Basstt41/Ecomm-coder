import { useContext, useState } from "react"
import { cartContex } from "../context/cartContext"
import { addDoc ,collection, getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom'

export default function Checkout() {
    const [nombreOrden, setNombreOrder] = useState('')
    const [emailOrden, setEmailOrden] = useState('')
    const [telefonoOrden, setTelefonoOrden] = useState()
    const [orderId, setOrderId] = useState()
    const {productosEnCarrito} = useContext(cartContex)

    const handleNombreOrden = (e) => {setNombreOrder(e.target.value)}
    const handleEmailOrden = (e) => {setEmailOrden(e.target.value)}
    const handleTelefonoOrden = (e) => {setTelefonoOrden(e.target.value)}


    const handleClick = () => {

        const db = getFirestore()

        const orderObj = {
            buyer: {
                nombre: nombreOrden,
                email: emailOrden,
                telefono: telefonoOrden
            },
            order: productosEnCarrito.map(producto => {const { ['img']: _, ...restoDelProducto } = producto; return restoDelProducto}), //esto me lo enseño chatGpt(?
            total: productosEnCarrito.reduce((total, item) => {
                return total + parseInt(item.precio) 
            }, 0),
            fecha: new Date()
        }
        
        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orderObj).then(response => setOrderId(response.id))
    }

    if(orderId) {
        return (
            <>
                <h1>Gracias por su compra, su id de compra es ${orderId}</h1>
                <Link to='/'>Home</Link>
            </>
        )
    }
    
    return (
        <>
            <h1>Completar datos</h1>
            <form>
                
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="ej: Goku...?" required value={nombreOrden} onChange={handleNombreOrden} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="ej: email@gmail.com" required value={emailOrden} onChange={handleEmailOrden} />

                <label htmlFor="telefono">Teléfono</label>
                <input type="number" name="telefono" placeholder="ej: 02323 111111" required value={telefonoOrden} onChange={handleTelefonoOrden} />

            </form>
            <button onClick={handleClick} >Finalizar</button>
        </>
    )
}