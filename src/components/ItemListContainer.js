// Contenedor de todos los items - Muestra en pantalla principal
/* import ItemCard from "./ItemCard"; */
import ItemList from "./ItemList"
import { fetchData } from "../utils/fetchData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { list } = require("../utils/list");

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { consoleId } = useParams();

    useEffect(() => {
        if (consoleId) {
        fetchData(2000, list.filter(item => item.console === consoleId))
        .then(result => setData(result))
        .catch(err => console.log(err))
        } else {
            fetchData(2000, list)
        .then(result => setData(result))
        .catch(err => console.log(err))
        }
    }, [consoleId])

    return (
        <>
            <ItemList items={data} />
        </>
    )
};

export default ItemListContainer;