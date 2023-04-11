import { Link } from "wouter";
import "./aside.css"
import {TfiHandPointRight} from "react-icons/tfi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useContext } from "react";
import { ContextCarrito } from "../context/ContextCarrito";
function Aside() {
  const [data] = useContext(ContextCarrito)
  
  const cantidad = data.reduce((acc,curr) => {
    return acc + curr.cantidad
  },0)

    return ( 
      <div className="aside">
          <h1 className="aside_titulo">CarpiShop</h1>

          <nav className="aside_nav">
            <ul className="aside_ul">
                <Link href="/">
                  <li> <button><span> {<TfiHandPointRight />}</span> Todos los productos</button></li>
                </Link>
                <Link href="/abrigos">
                  <li><button> <span> {<TfiHandPointRight />}</span>Abrigos</button></li>
                </Link>
                <Link href="/camisetas">
                  <li><button><span>{<TfiHandPointRight />}</span> Camisetas</button></li>
                </Link>
                <Link href="/pantalones">
                  <li><button><span>{<TfiHandPointRight />}</span> Pantalones</button></li>
                </Link>
                <br />
                <br />
                <br />
                <Link href="/carrito">
                  <li>
                     <button className="carrito_link">Carrito {<AiOutlineShoppingCart />}<p className="aside_cantidad">{cantidad}</p>
                     </button>
                  </li>
                </Link>
                
            </ul>           
          </nav>

          <footer className="footer">© 2022 Carpi Coder</footer>
      </div>
        
    );
}

export default Aside;