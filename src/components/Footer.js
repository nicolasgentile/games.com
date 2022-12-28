import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom";

const Footer = () => {  
    return (
        <footer>
            <div className="footerNav">
                <nav className="barra">
                    <ul>
                        <li>Privacidad</li>
                        <li>Legal</li>
                        <li>Contacto</li>
                    </ul>
                </nav>   
            </div>
            <div className="footerRedes">
                <Link className="navbar-brand logoImagen" to='/'><BsInstagram  /></Link>
                <Link className="navbar-brand logoImagen" to='/'><BsFacebook /></Link>
            </div>
            <div className="footerCopy">
                <p className="copy">Copyright &copy; 2022</p>
            </div>
        </footer>
    )
};

export default Footer;