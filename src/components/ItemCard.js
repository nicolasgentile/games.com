// Card de los items
import ItemCount from "./ItemCount";

const ItemCard = () => {
    return (
        <section>
            <div class="card" /* style="width:500px" */>
                <img class="card-img-top" src="https://www.pngfind.com/pngs/m/573-5735640_pensando-png-homero-simpson-pensando-png-transparent-png.png" alt="Card item"/>
                <div class="card-img-overlay">
                    <h4 class="card-title">John Doe</h4>
                    <p class="card-text">Some example text.</p>
                </div>
            </div>
            <div>
                <ItemCount />
            </div>
        </section>    
    )
};

export default ItemCard;