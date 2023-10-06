import CartWidget from './CartWidget'
import '../styles/navBar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
    
    return (
        <nav>
            <Link to="/">Logo</Link>

            <div className='navOnHover'>
                Productos
                <div className='navOnHoverContent'>
                    <Link to="/productos/remeras">Remeras</Link>
                    <Link to="/productos/puas">Púas</Link>
                    <Link to="/productos/discos">Discos</Link>
                </div>
            </div>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    )
}

export default Navbar