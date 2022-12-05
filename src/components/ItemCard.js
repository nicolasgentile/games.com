// Card de los items - Idem a Item.js agregue el card para poder identificarlo mejor

import ItemCount from "./ItemCount";


const ItemCard = ({title, price, thumbnail}) => {
    return (
        <section>
            <div class="card" /* style="width:500px" */>
                <img class="card-img-top" src={thumbnail} alt="Card item"/>
                <div class="card-img-overlay">
                    <h4 class="card-title"> {title} </h4>
                    <p class="card-text">$ {price}.</p>
                </div>
            </div>
            <div>
                <ItemCount />
            </div>
        </section>    
    )
};

export default ItemCard;