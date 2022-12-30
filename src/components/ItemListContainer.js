// Contenedor de todos los items - Muestra en pantalla principal
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firePromise } from '../utils/firebaseProm'; 

const ItemListContainer = () => {

    const [datos, setDatos] = useState ( [] );
    const { consoleId } = useParams ();

    useEffect ( () => {
        firePromise (consoleId)
            .then ( result => setDatos ( result ) )
            .catch ( err => console.log ( err ) )
    }, [ consoleId ]);

    useEffect ( () => {
        return ( () => {
            setDatos ( [] )
        } ) 
    }, [] );
    
    return (
        <>
            <div className = 'mt-4 p-5 bg-primary text-white rounded jumbotrom'>
                <h1>Games</h1>
                <p>Busca y encuentra el juego perfecto para vos, ese que te gusta, ese que puedes pasar horas jugando (sin abusar).</p>
                <p>Estamos seguros que lo encontraras y no te arrepentiras de invertir en tu diversion.</p>
                <p>Varias plataformas. Proximamente agregaremos mas consolas y juegos!</p>
            </div>
            <ItemList items = { datos } />
        </>
    )
};

export default ItemListContainer;