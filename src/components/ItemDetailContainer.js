import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firePromiseOne } from '../utils/firebaseProm';

const ItemDetailContainer = () => {
    const [ dat, setDat ] = useState ( {} );
    const { itemId } = useParams ();

    useEffect ( () => {
        firePromiseOne ( itemId )
            .then ( result => setDat ( result ) )
            .catch ( err => console.log ( err ) )
    }, [itemId] );

    return (
        <ItemDetail data = { dat } />
    );
};

export default ItemDetailContainer;