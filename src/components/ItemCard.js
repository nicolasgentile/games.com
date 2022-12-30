import { Link } from 'react-router-dom';

const ItemCard = ( {id, title, price, thumbnail} ) => {
    return (
            
        <article>
            <div className = 'card cardBodyMain'>
                <div className = 'divImageMain'>
                    <img className = 'card-img-top cardImgItem' src = { thumbnail } alt = 'Card item'/>
                </div>
                <div className = 'card-body'>
                    <h4 className = 'card-title'> { title } </h4>
                    <p className = 'card-text'>$ { price }.</p>
                    <Link className = 'nav-link' to = { `detail/${id}` } >Detalle del juego</Link>
                </div>
            </div>
        </article>    
    )
};

export default ItemCard;