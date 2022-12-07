import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const ItemCard = ({id, title, price, thumbnail}) => {
    return (
        <section>
            <div class="card">
                <img class="card-img-top" src={thumbnail} alt="Card item"/>
                <div class="card-img-overlay">
                    <h4 class="card-title"> {title} </h4>
                    <p class="card-text">$ {price}.</p>
                    <Link className="nav-link" to= {`detail/${id}`} >Detalle del juego</Link>
                </div>
            </div>
            <div>
                <ItemCount />
            </div>
        </section>    
    )
};

export default ItemCard;