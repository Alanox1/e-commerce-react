import { Route } from "wouter";
import TodosLosProductos from "./TodosLosProductos";
import "./main.css"
import Abrigos from "./Abrigos";
import Camisetas from "./Camisetas";
import Pantalones from "./Pantalones";
import Carrito from "./Carrito";
Route
function Main() {
    return ( 
        <main className="main">
           <Route path="/" component={TodosLosProductos} />
           <Route path="/abrigos" component={Abrigos} />
           <Route path="/camisetas" component={Camisetas} />
           <Route path="/pantalones" component={Pantalones} />
           <Route path="/carrito" component={Carrito} />
        </main>
     );
}

export default Main;