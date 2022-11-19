import React , { useContext} from "react";
import { createBuyOrder } from "../../Service/firebase";
import { cartContext} from "../Context/CartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./cartview.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {useNavigate} from "react-router-dom";

import Form from "../Form/Form";


function CartView (){
    const navigate = useNavigate()
    const {cart, deleteItem, cleanItem, getPriceTotal} = useContext (cartContext);
    console.log (cart);


   

    return <FlexWrapper>
        
        { 
        cart.map (prod => (
           
            <div className="card_prod">
                <div key={prod.id}>
                <img src={prod.img} alt="" />
                <div className="cart_detail">
                <h4>{prod.title}</h4>
                <h6>${prod.price}</h6>
                <h6>Cantidad: {prod.count}</h6>
                <h6>Precio Total:$ {prod.price * prod.count}</h6>
                <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
                <button onClick={()=> cleanItem(prod.id)}> Limpiar</button>
                </div>
                
                </div>
            </div>
        ))}
        
    
        <Form cart={cart} getPriceTotal={getPriceTotal} />
    </FlexWrapper>


    
    
}




export default CartView;