import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {CartContextProvider} from './Components/Context/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from './Components/CartView/CartView';





function App() {

  let miEstilo = {backgroundColor : "grey"};
  
  return (
    <div className="main" style={miEstilo}>
      <CartContextProvider>
        
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" 
              element= { 
            <ItemListContainer greeting= "TeachWear"/>} />
            <Route path="/category/:categoryID"  element= {<ItemListContainer />}/> 
            <Route path="/category/:accessoryID"  element= {<ItemListContainer />}/> 
            <Route path="/producto/:itemID" element= { <ItemDetailContainer/>} />
            <Route path="/cart" element= {<CartView/>}/>
            <Route path="*" element={ <h1>No se encontro nada: Error:404</h1> }/>
         </Routes>
        </BrowserRouter>
        
      </CartContextProvider>
    </div>
  );
}

export default App;
