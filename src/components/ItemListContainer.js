// Contenedor de todos los items - Muestra en pantalla principal
/* import ItemCard from "./ItemCard"; */
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { list } from "../utils/list"
import { fetchData } from "../utils/fetchData";
/* const list = [
    {
        id: "1",
        stock: "100",
        category: "PS5",
        title: "Battlefield 2042",
        price: "10.000",
        thumbnail: "https://planetagames.com.ar/wp-content/uploads/2021/11/BATTLE-2042.jpg",
        backgroundDetail: "https://onlygames.com.ar/wp-content/uploads/2021/06/battlefield-2042-1-1170x658.jpg",
        descripticonDetail: "Adáptate y vence en un mundo transformado por el desorden en la última entrega de la serie de Battlefield. Battlefield 2042 es un emocionante shooter en primera persona que marca el regreso de la guerra sin cuartel que hace famosa a la serie. Ambientado en un futuro cercano transformado por el desorden, tendrás que adaptarte y superar terrenos de batalla dinámicos con la ayuda de tu escuadrón y un arsenal de armas y vehículos de última tecnología"
    },
    {
        id: "2",
        stock: "100",
        category: "PS5",
        title: "Call Of Duty Modern Warfare 2",
        price: "21.000",
        thumbnail: "https://planetagames.com.ar/wp-content/uploads/2022/11/COD-MW2-PS5-NEW-600x600.jpg",
        backgroundDetail: "https://i.blogs.es/a631ec/mwii-003-preorder-005/1366_2000.webp",
        descripticonDetail: "Bienvenidos a la nueva era de Call of Duty. Call of Duty: Modern Warfare II es la secuela del gran éxito de 2019 Modern Warfare. Con el regreso del icónico líder del equipo, el capitán John Prices, el intrépido John “Soap” MacTavish, el veterano sargento Kyle “Gaz” Garrick y el lobo solitario y favorito de los fans Simon “Ghost” Riley, descubre qué hace a la fuerza especial 141 (FH141) el equipo legendario que es hoy. Aprovecha nuevas armas, vehículos y equipo de última tecnología para enfrentar a los enemigos. Equípate y lleva la batalla al mar para asediar a enemigos bajo el agua, penetrar una base enemiga muy fortificada, infiltrarte por los canales y liberar a los muy necesarios aliados en un lugar clandestino en las montañas"
    },
    {
        id: "3",
        stock: "100",
        category: "PS5",
        title: "Elden Ring",
        price: "16.000",
        thumbnail: "https://planetagames.com.ar/wp-content/uploads/2022/04/ELDEN-RING-PS5-NEW-600x600.jpg",
        backgroundDetail: "https://i.blogs.es/fc72f2/maxresdefault/1366_2000.webp",
        descripticonDetail: "EL NUEVO RPG DE ACCIÓN DE FANTASÍA. Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias. Un extenso mundo donde los campos abiertos, con una amplia variedad de situaciones, y las enormes mazmorras, con diseños complejos y tridimensionales, se conectan con total fluidez. Al explorar, te acompaña el entusiasmo por descubrir amenazas desconocidas y abrumadoras, lo que produce una gran sensación de logro"
    },
    {
        id: "4",
        stock: "100",
        category: "PS4",
        title: "Assassin's Creed Origins",
        price: "5.800",
        thumbnail: "https://planetagames.com.ar/wp-content/uploads/2020/12/AC-ORIGINS-PS4-FRONT-WEB-600x600.jpg",
        backgroundDetail: "https://www.muycomputer.com/wp-content/uploads/2017/11/creed1.jpg",
        descripticonDetail: "UN NUEVO COMIENZO. El antiguo Egipto, una tierra de grandeza e intriga, está desapareciendo por una fiera lucha por poder. Devela los secretos oscuros y mitos olvidados mientras revives el momento de la fundación de la hermandad de los asesinos."
    },
    {
        id: "5",
        stock: "100",
        category: "PS4",
        title: "Dark Souls Remastered",
        price: "5.000",
        thumbnail: "https://planetagames.com.ar/wp-content/uploads/2020/06/DARK-SOULS-REMASTERED-PS4-FRONT-WEB-600x600.jpg",
        backgroundDetail: "https://i.blogs.es/f1b227/portada-dark-souls-no-hit-speedsouls-hitcountermanager/1366_2000.webp",
        descripticonDetail: "Entonces llegó el Fuego. Vuelve a disfrutar del aclamado juego que definió el género con el que empezó todo. Gracias a una magnífica remasterización, podrás regresar a Lordran con unos impresionantes detalles en alta definición y a 60 fps. DARK SOULS: REMASTERED incluye el juego principal y el contenido descargable Artorias of the Abyss."
    },
    {
        id: "6",
        stock: "100",
        category: "PS4",
        title: "Monster Hunter World: Iceborne Master",
        price: "13.000",
        thumbnail: "https://planetagames.com.ar/wp-content/uploads/2022/05/MONSTER-HUNTER-ICEBORNE-600x600.jpg",
        backgroundDetail: "https://cdn.nexus.gg/assets/vidya/e52d8914c292487da0f1fcffbd7492e0/images/screenshots/9.jpg",
        descripticonDetail: "Explora el Nuevo Mundo… y más allá. ¡Iceborne es una expansión masiva que retoma el juego al final de Monster Hunter: World y desbloquea el nuevo rango maestro! ¡Nuevas misiones, monstruos, armas, armadura e historias para llevar tu caza a otro nivel!"
    },
    {
        id: "7",
        stock: "100",
        category: "XBOX",
        title: "The Witcher 3: Wild Hunt",
        price: "8.000",
        thumbnail: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870?w=200",
        backgroundDetail: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2015/05/477150-analisis-witcher-3-wild-hunt-ps4.jpg?itok=vlXqf05C",
        descripticonDetail: "Conviértete en un brujo, uno de los últimos asesinos de monstruos. Aventúrate por reinos devastados por la guerra para rastrear a la niña de las profecías, un arma viviente capaz de desatar un nivel de destrucción nunca antes visto."
    },
    {
        id: "8",
        stock: "100",
        category: "XBOX",
        title: "DmC Devil May Cry: Definitive Edition",
        price: "7000",
        thumbnail: "https://store-images.s-microsoft.com/image/apps.26819.65330717998707644.9adca242-7123-41b7-ba35-74ec15a93554.67711ea1-bb2e-4034-bee6-54b3302fa155?w=200",
        backgroundDetail: "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2021/01/DmC-0.jpg?w=1280&ssl=1",
        descripticonDetail: "La edición definitiva del juego de acción, que tan buenas críticas ha recibido, llega con gráficos mejorados a 60 fotogramas por segundo, nuevas características y todo el contenido descargable original. Encadena elegantes combos con ocho armas singulares. Atraviesa el mundo demoníaco del Limbo y únete a Dante y a Vergil en el legendario renacer de la franquicia Devil May Cry"
    },
    {
        id: "9",
        stock: "100",
        category: "WII",
        title: "Metroid Prime 3: Corruption",
        price: "4.000",
        thumbnail: "https://as01.epimg.net/meristation/imagenes/2017/01/08/game_cover/1483876800.jpg",
        backgroundDetail: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/H2x1_Wii_MetroidPrime3Corruption_image1600w.jpg",
        descripticonDetail: "Tercera entrega de la serie de aventuras de Samus en primera persona. La base Sector Zero de la Federación Galáctica se encuentra bajo ataque de los Piratas del Espacio. Samus tiene que conseguir encender el generador para reactivar los sistemas de defensas, pero al final del camino le espera una sorpresa terrorífica"
    },
    {
        id: "10",
        stock: "100",
        category: "WII",
        title: "No More Heroes 2: Desperate Struggle",
        price: "3500",
        thumbnail: "https://as01.epimg.net/meristation/imagenes/2020/11/25/game_cover/312082341606335045.jpg",
        backgroundDetail: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_NoMoreHeroes2DesperateStruggle_image1600w.jpg",
        descripticonDetail: "Tres años después de llegar a lo más alto en la clasificación de la Asociación de Asesinos Unidos, Travis Touchdown termina descendiendo al puesto 51. Por si no bastase con eso, otro asesino llamado Skelter Helter jura vengarse de Travis por haber matado a su hermano. ¡Impulsado por sus propios deseos y por la sed de venganza, el asesino otaku más letal desenfunda su katana láser una vez más y se lanza de cabeza a un nuevo enfrentamiento! No More Heroes 2: Desperate Struggle es una aventura de acción a cargo de Grasshopper Manufacture"
    }
]; */

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(2000, list)
        .then(response => setData(list))
        .catch(err => console.log(err))
    }, [data])

    return (
        <>
            <ItemList items={data} />
        </>
    )
};

export default ItemListContainer;