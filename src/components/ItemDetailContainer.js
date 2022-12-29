import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore"; 

const ItemDetailContainer = () => {
    const [dat, setDat] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const firePromiseOne = async () => {
            const docRef = doc (db, "games", itemId);
            const docSnap = await getDoc (docRef);
    
            if (docSnap.exists()) {
                return {
                    id: itemId, ...docSnap.data()
                }
            } else {
                console.log ("No such document!");
            }
        }
        firePromiseOne()
            .then (result => setDat(result))
            .catch (err => console.log (err))
    }, []);

    useEffect(() => {
        return(() => {
            setDat ([])
        })
    }, []);

    return (
        <ItemDetail data = { dat } />
    );
};

export default ItemDetailContainer;