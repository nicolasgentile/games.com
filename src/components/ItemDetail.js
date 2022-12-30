import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const ItemDetail = ( { data } ) => {

    const [ itemCount, setItemCount ] = useState (0);

    const { addToCart } = useContext ( CartContext );

    const goAdd = ( it ) => {
        if ( it > 0 ) {

            Toastify ( {
                text: 'Seleccionaste ' + it + ' ' + data.title,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () {} // Callback after click
              } ).showToast ();

        setItemCount ( it );
        addToCart ( data, it ); 
        } else {
            alert ( 'Seleccione la cantidad' );
        } 
    }

    return (
        <section className = 'detailContainer'>
            <div className ='imageContainer'>
                <img src = { data.backgroundDetail } alt = 'Detail img' />
            </div>
            <article className = 'contentContainer'>
                <div className = 'textDetail'>
                    <h3> { data.title } </h3>
                    <h4> $ { data.price } </h4>
                    <p> { data.descripticonDetail } </p>
                </div>
                {
                    itemCount === 0
                    ? <ItemCount stock = { data.stock } first = { itemCount } goAdd = { goAdd}  />
                    : <Link to = '/cart'><button type = 'button' className = 'btn btn-outline-danger'>Revisar</button></Link>
                }
                <div className = 'dataDetail'>
                    <p>Category: { data.console } </p>
                    <p>Stock: { data.stock } </p>
                </div>
            </article>
        </section>
    )
}

export default ItemDetail;