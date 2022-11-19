import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Carousel from "../Carousel/Carousel";

function ItemList(props){
    return <>
    <Carousel/>
    <FlexWrapper>
        
    {props.productList.map( (prod) => {
            return <Card 
            key= {prod.id}
            id={prod.id}
            title= {prod.title} 
            img={prod.img} 
            price={prod.price} 
            stock={prod.stock}/>
        }) }
    
    </FlexWrapper>
</>;

}

export default ItemList;