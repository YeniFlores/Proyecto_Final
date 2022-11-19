import React,  { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import Loader from "../Loader/Loader";


function ItemDetail ({producto}) {
    const [count, setCount] = useState(0);
    const {addTocart, deleteItem}= useContext(cartContext); 


    function handleAddToCart(count){
        addTocart(producto, count);
        setCount(count);
    }

    if (producto.title)
    return (
        <div className="details">
            <FlexWrapper>
                <div className="main-details">
                    <div className="img-details">
                    <img src={producto.img} alt={producto.title}/>
                    </div>
                    <h5 className= "title-card">{producto.title}</h5>
                    <p>{producto.detail}</p>
                    <h6 >${producto.price}</h6>
                    <h6>Stock disponible: {producto.stock}</h6>
                </div>
                
            {count === 0 ? (
                <ItemCount  
                onAddToCart={handleAddToCart} 
                stock={producto.stock} 
                initial={1} 
                text="Agregar al carrito"/>): 
                (<Link to= "/cart">Ver carrito</Link>)
            }
            <button onClick={() => deleteItem(producto.id)}>Eliminar</button>
           
            
            </FlexWrapper>
           
        </div>
    );
   


    return <Loader/>
}

export default ItemDetail;