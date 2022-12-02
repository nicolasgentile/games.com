import { useState } from "react";

const ItemCount = () => {
    const [amount, setAmount] = useState (0); // HOOK

    const addProduct = () => {
        setAmount (amount + 1);
    };

    const subtractProduct = () => {
        if (amount > 0) {
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
                <button type="button" class="btn btn-outline-danger">Agregar</button>
            </div>
        </section>
    )
};

export default ItemCount;