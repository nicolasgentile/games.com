import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <article>
            <div>
                <h3> {item.title} </h3>
                <h4> {item.price} </h4>
                <p> {item.description} </p>
            </div>
            <ItemCount />
            <div>
                <p>Category: {item.category} </p>
                <p>Stock: {item.stock} </p>
            </div>
        </article>
    )
}

export default ItemDetail;