import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router-dom";
const { list } = require("../utils/list");


const ItemDetailContainer = () => {
    const [dat, setDat] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        fetchData(2000, list.find(item => item.id === itemId))
        .then(result => setDat(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail data={dat} />
    );
};

export default ItemDetailContainer;