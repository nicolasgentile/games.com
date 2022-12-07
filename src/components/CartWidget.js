import { BsController } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div classclassName="navbar-left">
            <div classclassName="logo">
                <Link className="navbar-brand logoImagen" to='/'><BsController /></Link>
                <p classclassName="logoText">Games</p>
            </div>
        </div>
    )
};

export default CartWidget;