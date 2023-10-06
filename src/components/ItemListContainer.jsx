import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useEffect, useState } from "react"
import Item from './Item'
import '../styles/loader.css'
import '../styles/itemListContainer.scss'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [prod, setProd] = useState([]);
    const { categoria } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
            const refProductos = categoria
                ? query(collection(db, 'productos'), where('categoria', '==', categoria))
                : collection(db, 'productos')
            
            getDocs(refProductos).then((snapshot) => {

                if (snapshot.size !== 0) {
                    setProd(
                        snapshot.docs.map((doc) => ({
                            ID: doc.id,
                            ...doc.data()
                        }))
                    );
                }
            });
        
    }, [categoria]);



    
    if(prod.length === 0) {
        return <span className="loader"></span>
    }
    return(
        <main>
            <h1>Nuestros productos disponibles</h1>
            <section>
                {prod.map(item => (
                    <Item key={item.ID} nombre={item.nombre} img={item.img} precio={item.precio} ID={item.ID} />
                ))}
            </section>
        </main>
    )
}


export default ItemListContainer