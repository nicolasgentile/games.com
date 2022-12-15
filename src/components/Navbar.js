import { AiOutlineShoppingCart } from "react-icons/ai";
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbarOrigin">

                <CartWidget />

                <div className="collapse navbar-collapse categories" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto list">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home {/* <span class="sr-only">(current)</span> */}</Link>
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
                    <link className="logoShoppingCard" to='/cart'><AiOutlineShoppingCart /></link>
                    <div id="cardCounter">0</div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;