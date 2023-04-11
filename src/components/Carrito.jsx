import { useContext, useState } from "react";
import "./carrito.css"
import { ContextCarrito } from "../context/ContextCarrito";
import {AiFillDelete} from 'react-icons/ai'
 
function Carrito() {
    const [data,setData] = useContext(ContextCarrito)
    const [compro,setCompro] = useState(false)
    const subTotal = data.reduce((acc,curr) => {
        return acc + curr.subtotal
      },0)


  
    const eliminarProducto = (producto) => {
        setData((currentItems) => {
            return currentItems.filter((el) => el.id !== producto.id)
            
        })
    }
  
    return ( 
        <section className="carrito">
            <h2 className="carrito_titulo">Carrito</h2>
            <div>
                {data.map((producto) => {
                  return <article key={producto.id} className="carrito_producto">
                    {/* <img className="carrito_img" src={`../../src/${producto.imagen}`} /> */}
                    <img className="carrito_img" src={`${producto.imagen}`} />
                    <div>
                        <p>Nombre</p>
                        <p className="carrito_ropa">{producto.nombre}</p>
                    </div>
                    <div>
                        <p>Cantidad</p>
                        <p className="carrito_cantidad">{producto.cantidad}</p>
                    </div>
                    <div>
                        <p>Precio</p>
                        <p>${producto.precio}</p>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <p>${producto.subtotal}</p>
                    </div>
                    <button className="carrito_eliminar" onClick={() => eliminarProducto(producto)}>{<AiFillDelete />}</button>
                    
                </article>
                })}
                
            </div>
         {compro
         ? <p>Gracias por tu compra  😀 </p>
         : data.length === 0 
         ? <p>Tu carrito está vacío. 😠</p>
         :  <div className="carrito_contenedor-abajo">
         <button className="carrito_vaciar-carrito" onClick={() => setData([])}>Vaciar Carrito </button>
         <div>
             <h4 className="carrito_total">TOTAL: ${subTotal}</h4>
             <button onClick={() => {
                setData([])
                setCompro(true)
             } } className="carrito_comprar">Comprar</button>
         </div>
         
     </div> }   
           
            
        </section>
    );
}

export default Carrito;