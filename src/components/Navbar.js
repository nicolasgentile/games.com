import { AiOutlineShoppingCart } from "react-icons/ai";
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Navbar = () => {

    const number = useContext(CartContext);

    let newNumber = number.howManyItems();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbarOrigin">

                <CartWidget />

                <div className="collapse navbar-collapse categories" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/ps5'>PS5</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/ps4'>PS4</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/xbox'>Xbox</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/wii'>Wii</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <Link className="logoShoppingCard" to='/cart'><AiOutlineShoppingCart /></Link>
                    {
                        newNumber > 0    
                        ? <div className="cardCounter"> {newNumber} </div>
                        : <div className="none"></div>
                    }
                </div>
            </nav>
        </header>
    )
};

export default Navbar;