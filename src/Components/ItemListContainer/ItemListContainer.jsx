import React, { useState, useEffect } from "react"
import ItemCount from "../Counter/ItemCount"
import getProductos from "../Utils/getProducto";
import "./ItemListContainer.css"
const ItemListContainer = () => {
    const [count, setCount] = useState(0);
    const [products, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(productos => setProductos(productos)).catch(error => console.log(error));
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products])

    const onAdd = (condicion) => {
        if (condicion === ' - ') {
            setCount(count - 1)

        }
        if (condicion === ' + ') {
            setCount(count + 1)
        }
    };

    const initial = 0;
    return (
        <div>
            {products.map((product) => <div key={product.id} className="productos">
                <h1>{product.name}</h1>
                <img className="imagenes" src={product.img} alt={product.name} />
                <ItemCount onAdd={onAdd} stock={product.stock} initial={initial} count={count} />
            </div>)}


        </div>
    );
};
export default ItemListContainer