import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { list } from "../utils/list";
import { useParams } from "react-router"

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        fetchData(2000, list.find(item => item.id === parseInt(idItem)))
        .then(response => setData(list))
        .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;