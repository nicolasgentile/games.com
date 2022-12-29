import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore"; 
import { db } from "../utils/firebaseConfig";

const Cart = () => {

    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Leo Messi',
                email: 'messirve@example.com',
                phone: '3415763131'
            },
            date: serverTimestamp(),
            games: ctx.cartList.map (item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                it: item.it
            })),
            total: ctx.fullValue()
        }

        const createOrderInFirestore = async () => {
            const newOrdersRef = doc (collection(db, "orders"));
            await setDoc(newOrdersRef, order);
            return newOrdersRef;
        }
        createOrderInFirestore()
            .then (result => { 
                alert ('Tu orden ' + result.id + ' fue creada ')
                ctx.cartList.forEach(async (item) => {
                    const itemRef = doc(db, "games", item.id);
                    await updateDoc (itemRef, {
                        stock: increment (-item.it)
                    });
                });
                ctx.emptyCart();
            })
            .catch (err => console.log (err))
    };

    const ctx = useContext(CartContext);

    return (
        <main className="cartMain">
            <h3>Los juegos que te vas a llevar estan aca</h3>
            <section className="buttons">
                <div>
                    <Link to='/'><button className="btn-outline-danger"> Seguir comprando </button></Link>
                </div>
                <div>
                    {
                        ctx.cartList.length === 0
                        ? <p>El carrito esta vacio</p>
                        : <button className="btn-outline-danger" onClick={() => ctx.emptyCart()}>Vaciar Carrito</button>
                    }
                </div>
            </section>
            
            <section className="gameDetailContainer">
                {
                    ctx.cartList.length > 0 && ctx.cartList.map(item => 
                        <div className="card cardInCart" key={item.id}>
                            <div className="divImage">
                                <img className="card-img-top cardImgCart" src= {item.backgroundDetail} alt="Game"/>
                            </div>
                            <div className="card-body cardCartBody">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">Some example text.</p>
                                <p>Cantidad: {item.it}</p>
                                <p> $ {item.price} cada uno</p>
                                <button className="btn-outline-danger" onClick={() => ctx.deleteGame(item.id)}> Delete game</button> 
                            </div>
                            <div className="ShopSubDetail">
                                <h5>Subtotal</h5>
                                <p>Cantidad del producto: {item.it}</p>
                                <p>x</p>
                                <p>Precio unitario: {item.price}</p>
                                <h6>= $ {ctx.subtotalPerGame(item.id)} </h6>
                            </div>
                        </div>
                    )
                }
                
            </section>
            <section className="totalCart">
                {
                ctx.cartList.length > 0 &&
                <>
                    <h5 className="space resume">Resumen</h5>
                    <h6 className="space">Total de la compra: $ {ctx.fullValue()} Final</h6>
                    <button className="btn-outline-danger space" onClick={createOrder}> Confirmar compra</button>
                </>
                }
                </section>
            
        </main>
    );
}

export default Cart;

/*  */