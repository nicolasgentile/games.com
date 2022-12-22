import { createContext, useState } from "react";

export const CartContext = createContext ();

const CardContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (data, it) => { //Ver nombre en consigna - Funcion global
        
        let itIsHere = cartList.find(game => game.id === data.id);
        if (itIsHere === undefined) {
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
        } else {
            itIsHere.it += it;
            setCartList([...cartList]);
        }
    }

    const deleteGame = (id) => { // Eliminar item
        const newCart = cartList.filter(data => data.id !== id);
        setCartList(newCart);
    }

    const emptyCart = () => { // Verificar - Vaciar carrito
        const empty = cartList.length = 0;
        setCartList(empty);
    }

    const howManyItems = () => {
        let numberItems = cartList.map(data => data.it);
        return numberItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    };

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteGame, emptyCart, howManyItems}}>
            {children}
        </CartContext.Provider>
    );
}

export default CardContextProvider;