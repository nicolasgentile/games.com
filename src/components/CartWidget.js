import { BsController } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className = 'navbar-left'>
            <div className = 'logo'>
                <Link className = 'navbar-brand logoImagen' to = '/'><BsController /></Link>
                <p className = 'logoText'>Games</p>
            </div>
        </div>
    )
};

export default CartWidget;