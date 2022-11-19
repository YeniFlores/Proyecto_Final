import React, { useState, useEffect } from "react";
import { getOneProduct } from "../../Service/firebase";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemDetailContainer (props) {
    const [producto, setProduct] = useState([])
    const [feedbackError , setFeedBackError] = useState(null)
    const {itemID} = useParams();
    

    useEffect (() => {
            getOneProduct(itemID)
                .then ((data) => {
                setProduct(data);
            })
            .catch ((error) =>{
                setFeedBackError(error);
            })
        },[itemID]
    )
    return(
        <FlexWrapper>
      {feedbackError !== null ? (
        <h4>Error: {feedbackError}</h4>
      ) : (
        <ItemDetail producto= {producto}/>
      )}
    </FlexWrapper>
        
    );
}

export default ItemDetailContainer;