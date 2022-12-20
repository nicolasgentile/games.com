import { Link } from "react-router-dom";

const ItemCard = ({id, title, price, thumbnail}) => {
    return (
        <section>
            <div className="card">
                <img className="card-img-top" src={thumbnail} alt="Card item"/>
                <div className="card-img-overlay">
                    <h4 className="card-title"> {title} </h4>
                    <p className="card-text">$ {price}.</p>
                    <Link className="nav-link" to= {`detail/${id}`} >Detalle del juego</Link>
                </div>
            </div>
        </section>    
    )
};

export default ItemCard;