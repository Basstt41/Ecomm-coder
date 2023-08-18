import CartWidget from './CartWidget'
import './navBar.css'


const Navbar = () => {
    return (
        <nav>
            <p>Logo</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar