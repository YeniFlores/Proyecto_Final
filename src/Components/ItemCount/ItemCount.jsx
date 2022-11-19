import React, { useState } from "react";
import "./itemcount.css"

export default function ItemCount({ stock, initial, text, onAddToCart }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="container_count">

        <h5>Finalizar compra</h5>
        <div className="btn_cantidad">
        <button className=" btn_reduce" onClick={handleSubstract}> - </button>
        <strong>{count}</strong>
        <button className= "btn_plus" onClick={handleAdd}> + </button>
        </div>
      <button onClick={()=> {onAddToCart(count)}} className="button_add">{text}</button>
      
    </div>
  );
}