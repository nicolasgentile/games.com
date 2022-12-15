import { useState, useEffect } from "react";

const ItemCount = ({ stock, first, goAdd}) => {
    const [amount, setAmount] = useState (0); // HOOK

    useEffect( () => {
        setAmount(first);
    },[]);

    const addProduct = () => {
        if (amount < stock) {
            setAmount (amount + 1);
        }
    };

    const subtractProduct = () => {
        if (amount > first) {
            setAmount (amount - 1);
        };
    };

    return (
        <section className="ItemCount">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-danger" onClick={subtractProduct}>-</button>
                <span className="amount"> {amount} º </span>
                <button type="button" class="btn btn-outline-danger" onClick={addProduct}>+</button>
            </div>
            <div>
                <button type="button" class="btn btn-outline-danger" onClick={() => goAdd(amount)}>Agregar</button>
            </div>
        </section>
    )
};

export default ItemCount;