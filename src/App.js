import './App.css'
import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  return (
    //<CartContext>
      <BrowserRouter>
        <NavBar />
        
          {/* ruta home */}
          <Route exact path="/">
            <div className="App">
              <header>
              <ItemListContainer greeting={"Bienvenido a MendoHard!"} />
              </header>
            </div>
          </Route>
          
          {/* {/* ruta categorias */}
          <Route path="/category/:categoryId">
          <ItemListContainer />
          </Route>
          
          {/* ruta producto */}
          <Route path="/product/:productId">
           
          </Route>
          
          {/* ruta carrito */}
          <Route path="/cart">
           
          </Route>
        
       
       
      </BrowserRouter>
     
    
  );
}

export default App;
