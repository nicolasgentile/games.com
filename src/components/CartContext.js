import { createContext, useState } from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

export const CartContext = createContext ();

const CardContextProvider = ( {children} ) => {

    const [ cartList, setCartList ] = useState ( [] );

    const addToCart = ( data, it ) => { //Ver nombre en consigna - Funcion global
        
        let itIsHere = cartList.find ( game => game.id === data.id );
        if ( itIsHere === undefined ) {
            setCartList ( [
                ...cartList,
                {
                    key: data.id,
                    id: data.id,
                    title: data.title,
                    backgroundDetail: data.backgroundDetail,
                    price: data.price,
                    it: it
                }
            ] );
        } else {
            itIsHere.it += it;
            setCartList ( [...cartList] );
        }
    }

    const deleteGame = ( id ) => { // Eliminar item
        const newCart = cartList.filter ( data => data.id !== id );
        setCartList ( newCart );
        Toastify({
            text: 'Eliminaste el juego',
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: 'top', 
            position: 'right', 
            stopOnFocus: true, 
            style: {
                background: 'linear-gradient(to right, red, #96c93d)',
            },
            onClick: function () {} 
        } ).showToast ();
    }

    const emptyCart = () => { // Verificar - Vaciar carrito
        setCartList ( [] );
        Toastify ( {
            text: 'Vaciaste el carrito, sigue buscando ese juego!',
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: 'top', 
            position: 'center',
            stopOnFocus: true, 
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c93d)',
            },
            onClick: function(){} 
        } ).showToast ();
    }

    const cleanCart = () => {
        setCartList ( [] );
    }

    const howManyItems = () => { // Cantidad de items en el carrito
        let numberItems = cartList.map ( data => data.it );
        return numberItems.reduce ( ( ( previousValue, currentValue ) => previousValue + currentValue ), 0 );
    };

    const subtotalPerGame = ( id ) => { //Costo por juego segun cantidad
        let sub = cartList.map ( data => data.id ).indexOf ( id );
        return cartList[ sub ].price * cartList[ sub ].it;
    };

    const fullValue = () => { // Costo total
        let full = cartList.map ( data => subtotalPerGame ( data.id ) );
        return full.reduce ( ( previousValue, currentValue ) => previousValue + currentValue );
    };

    return (
        <CartContext.Provider value = { { cartList, addToCart, deleteGame, emptyCart, howManyItems, subtotalPerGame, fullValue, cleanCart } }>
            { children }
        </CartContext.Provider>
    );
}

export default CardContextProvider;