import { createContext, useState } from "react";

export const CartContext = createContext ();

const CardContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (data, it) => { //Ver nombre en consigna - Funcion global
        setCartList([
            ...cartList,
            {
                id: data.id,
                title: data.title,
                backgroundDetail: data.backgroundDetail,
                price: data.price,
                it: it
            }
        ]);
    }

    const deleteGame = (id) => {
        const newCart = cartList.filter(data => data.id !== id);
        setCartList(newCart);
    }

    const emptyCart = () => { // Verificar
        const empty = cartList.length = 0;
        setCartList(empty);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteGame, emptyCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CardContextProvider;