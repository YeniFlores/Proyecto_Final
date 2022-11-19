import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"
import { getProduct, getProductByCategory, getAccessory  } from "../../Service/firebase";

import {useParams} from "react-router-dom";  
import Loader from "../Loader/Loader";

function ItemListContainer (props) {

    const [productList, setProductList] = useState([]);
    const params = useParams()
    const categoryID = params.categoryID;
    const params2= useParams()
    const accessoryID = params2.accessoryID;
    
    useEffect(() => {
        if (categoryID === undefined) {
            getProduct().then((data) => {
                setProductList(data);
          });
        } else {
            getProductByCategory(categoryID).then((data) => {
                setProductList(data);
          });
        }
      }, [categoryID]);

      useEffect(() => {
        if (accessoryID === undefined) {
            getProduct().then((data) => {
                setProductList(data);
          });
        } else {
            getAccessory(accessoryID).then((data) => {
                setProductList(data);
          });
        }
      }, [accessoryID]);
    
    return(

        <div className="container">
            <h3>{props.greeting}</h3>

            {productList.length ? 
            <ItemList productList= {productList}/> 
            :
            <Loader/>}
            
        </div>
    );
}



export default ItemListContainer;