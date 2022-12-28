import ItemCard from "./ItemCard";
/* import Load from "./Load"; */

const ItemList = ({ items}) => {

    return (
        <section className='ItemListContainer'>
            {
                items.length > 0
                ? items.map(item => (
                    <ItemCard 
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    thumbnail = {item.thumbnail} />
                ))
                : <p> ... Cargando ...</p>
                /* : <Load /> */
            }
        </section>
    )
};

export default ItemList;


