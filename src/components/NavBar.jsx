import CartWidget from './CartWidget'
import '../styles/navBar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
    
    return (
        <nav>
            <Link to="/">Logo</Link>
            <Link to="/productos/Remeras">Remeras</Link>
            <Link to="/productos/Puas">Púas</Link>
            <Link to="/productos/Discos">Discos</Link>
            <CartWidget />
        </nav>
    )
}

export default Navbar