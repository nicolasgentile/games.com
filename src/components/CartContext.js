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
                    key: data.id,
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
        setCartList([]);
    }

    const howManyItems = () => { // Cantidad de items en el carrito
        let numberItems = cartList.map(data => data.it);
        return numberItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    };

    const subtotalPerGame = (id) => { //Costo por juego segun cantidad
        let sub = cartList.map(data => data.id).indexOf(id);
        return cartList[sub].price * cartList[sub].it;
    };

    const fullValue = () => { // Costo total
        let full = cartList.map(data => subtotalPerGame(data.id));
        return full.reduce((previousValue, currentValue) => previousValue + currentValue);
    };

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteGame, emptyCart, howManyItems, subtotalPerGame, fullValue}}>
            {children}
        </CartContext.Provider>
    );
}

export default CardContextProvider;