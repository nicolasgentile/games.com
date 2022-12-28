// Contenedor de todos los items - Muestra en pantalla principal
import ItemList from "./ItemList"
/* import { fetchData } from "../utils/fetchData"; */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* const { list } = require("../utils/list"); */
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { consoleId } = useParams();

    useEffect(() => {
        const firePromise = async() => {
            const querySnapshot = await getDocs(collection(db, "list"));
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            });
        }
        firePromise();
/*         if (consoleId) {
        fetchData(2000, list.filter(item => item.console === consoleId))
        .then(result => setData(result))
        .catch(err => console.log(err))
        } else {
            fetchData(2000, list)
        .then(result => setData(result))
        .catch(err => console.log(err))
        } */
    }, [consoleId]);

    return (
        <>
            <div className="mt-4 p-5 bg-primary text-white rounded jumbotrom">
                <h1>Games</h1>
                <p>Busca y encuentra el juego perfecto para vos, ese que te gusta, ese que puedes pasar horas jugando (sin abusar).</p>
                <p>Estamos seguros que lo encontraras y no te arrepentiras de invertir en tu diversion.</p>
                <p>Varias plataformas. Proximamente agregaremos mas consolas y juegos!</p>
            </div>
            <ItemList items={data} />
        </>
    )
};

export default ItemListContainer;