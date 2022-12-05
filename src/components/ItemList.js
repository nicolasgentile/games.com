import ItemCard from "./ItemCard";

const ItemList = ({ items}) => {

    return (
        <section className='ItemListContainer'>
            {
                items.map(item => (
                    <ItemCard 
                    key = {item.id}
                    title = {item.title}
                    price = {item.price}
                    thumbnail = {item.thumbnail} />
                ))
            }
        </section>
    )
};

export default ItemList;


