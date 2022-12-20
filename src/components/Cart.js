import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const {cartList, deleteGame, emptyCart} = useContext(CartContext);

    return (
        <>
            <h3>Los juegos que te vas a llevar estan aca</h3>
            <ul>
            {
                cartList.length === 0
                ? <p>El carrito esta vacio</p>
                : cartList.map(item => <li key={item.id}> {item.title} - Cantidad: {item.it} - <button onClick={() => deleteGame(item.id)}> Delete game</button> </li>)
            }
            </ul>
            <button onClick={() => emptyCart()}>Vaciar</button>
        </>
    );
}

export default Cart;