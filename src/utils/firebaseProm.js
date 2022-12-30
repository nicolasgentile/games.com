import { db } from '../utils/firebaseConfig';
import { doc, getDoc, collection, query, where, getDocs, setDoc } from 'firebase/firestore';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

export const firePromiseOne = async ( itemId) => {
    const docRef = doc ( db, 'games', itemId );
    const docSnap = await getDoc ( docRef );
    
    if ( docSnap.exists() ) {
        return {
            id: itemId, ...docSnap.data ()
            }
        } else {
        Toastify({
            text: 'El producto no existe!',
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
        console.log ( 'No such document!' );
    }
};

export const firePromise = async(consoleId) => {
    let inTwo;
    if ( consoleId ) {
        inTwo = query ( collection (db, 'games'), where ('console', '==', consoleId ) );
    } else {
        inTwo = query( collection ( db, 'games' ) );
    }
    const querySnapshot = await getDocs (inTwo);
    const dataFromFirebase = querySnapshot.docs.map ( item => ( {
        id: item.id, ...item.data ()
    }))
    return dataFromFirebase;
};

export const createOrderInFirestore = async ( order ) => {
    const newOrdersRef = doc ( collection ( db, 'orders' ) );
    await setDoc ( newOrdersRef, order );
    return newOrdersRef;
};