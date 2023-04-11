import { useContext } from "react";
import "./producto.css"
import { ContextCarrito } from "../context/ContextCarrito";
function Producto({producto}) {
    const [data,setData]= useContext(ContextCarrito)

    const agregarAlCarrito = (producto) => {
        
        setData((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === producto.id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === producto.id) {
                return { ...item, cantidad: item.cantidad + 1 ,subtotal : item.subtotal + item.precio,id : item.id};
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id : producto.id , precio : producto.precio , cantidad : 1 ,imagen : producto.imagen,subtotal : producto.precio,nombre : producto.categoria.nombre}];
          }
        });
      };

    return (
        <div className="producto_contenedor">
            {/* <img style={{width : "100%", height : "auto"}} src={`../../src/${producto.imagen}`} alt="imagen del producto a vender"/> */}
             <img style={{width : "100%", height : "auto"}} src={`./public/${producto.imagen}`} alt="imagen del producto a vender"/>
            <div className="producto_detalle">
                <h3 className="producto_titulo">{producto.titulo}</h3>
                <p className="producto_precio">${producto.precio}</p>
                <button className="producto_agregar" onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            </div>
        </div>
    );
}

export default Producto;