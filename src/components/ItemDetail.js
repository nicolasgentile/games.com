import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";

const ItemDetail = ({ data }) => {

    const [itemCount, setItemCount] = useState(0);

    const { addToCart } = useContext (CartContext);

    const goAdd = (it) => {
        if (it > 0) {
        alert("Seleccionaste " + it + " " + data.title);
        setItemCount(it);
        addToCart (data, it); // Llamando a la funcion global para agregar item al carrito
        } else {
            alert("Seleccione la cantidad");
        } 
    }

    return (
        <section className="detailContainer">
            <div className="imageContainer">
                <img src={data.backgroundDetail} alt="Detail img" />
            </div>
            <article className="contentContainer">
                <div className="textDetail">
                    <h3> {data.title} </h3>
                    <h4> $ {data.price} </h4>
                    <p> {data.descripticonDetail} </p>
                </div>
                {
                    itemCount === 0
                    ? <ItemCount stock={data.stock} first={itemCount} goAdd={goAdd} />
                    : <Link to='/cart'><button type="button" class="btn btn-outline-danger">Revisar</button></Link>
                }
                <div className="dataDetail">
                    <p>Category: {data.console} </p>
                    <p>Stock: {data.stock} </p>
                </div>
            </article>
        </section>
    )
}

export default ItemDetail;