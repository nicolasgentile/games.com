import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
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
                <ItemCount />
                <div className="dataDetail">
                    <p>Category: {data.consoleId} </p>
                    <p>Stock: {data.stock} </p>
                </div>
            </article>
        </section>
    )
}

export default ItemDetail;