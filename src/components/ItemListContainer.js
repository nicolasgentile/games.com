// Contenedor de todos los items - Muestra en pantalla principal
import ItemList from "./ItemList"
/* import { fetchData } from "../utils/fetchData"; */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* const { list } = require("../utils/list"); */
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"; 

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { consoleId } = useParams();

    useEffect(() => {
        const firePromise = async() => {
            let inTwo;
            if (consoleId) {
                inTwo = query(collection(db, "games"), where('console', '==', consoleId));
            } else {
                inTwo = query(collection(db, "games"));
            }
            const querySnapshot = await getDocs (inTwo);
            const dataFromFirebase = querySnapshot.docs.map(item => ({
                id: item.id, ...item.data()
            }))
            return dataFromFirebase;
        }
        firePromise()
            .then (result => setDatos(result))
            .catch (err => console.log (err))
    }, [consoleId]);

    useEffect(() => {
        return(() => {
            setDatos ([])
        })
    }, []);
    
    return (
        <>
            <div className="mt-4 p-5 bg-primary text-white rounded jumbotrom">
                <h1>Games</h1>
                <p>Busca y encuentra el juego perfecto para vos, ese que te gusta, ese que puedes pasar horas jugando (sin abusar).</p>
                <p>Estamos seguros que lo encontraras y no te arrepentiras de invertir en tu diversion.</p>
                <p>Varias plataformas. Proximamente agregaremos mas consolas y juegos!</p>
            </div>
            <ItemList items={datos} />
        </>
    )
};

export default ItemListContainer;