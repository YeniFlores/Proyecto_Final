import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider (props){
    const [cart, setCart] = useState ([]);

    function addTocart(item, count){
        let inCart = [...cart];
        let inItem = {...item, count}
        inCart.push(inItem)
        setCart (inCart)

    }

    const cleanItem = () => {
        setCart([]);  
      }

    function deleteItem (idToDelete){
        let inCart = cart.filter (itemInCart =>(itemInCart.id !== idToDelete))
        setCart (inCart);

    }

    function getPriceTotal(){
      let total = 0;
        cart.forEach((itemInCart) => {
          total = total + (itemInCart.count * itemInCart.price);
        });
        return total;
    }
    function getTotalItem() {
        let total = 0;
        cart.forEach((itemInCart) => {
          total = total + itemInCart.count;
        });
        return total;
      }
    

    return (
        <>
        <cartContext.Provider value ={{ cart, setCart, addTocart, getTotalItem,getPriceTotal, deleteItem, cleanItem}}>
            {props.children}

        </cartContext.Provider>
        
        </>
    )
}

export  {cartContext, CartContextProvider};