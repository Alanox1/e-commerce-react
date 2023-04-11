import productos from "../data"
import Producto from "./Producto";

function TodosLosProductos() {

    return ( 
        <section>
            <h2 style={{color : "#785ce9"}}>Todos los productos</h2>
            <div style={{display :  "grid", gridTemplateColumns : "repeat(auto-fit,minmax(200px, 1fr))",gap : "16px"}}>
                
                    {productos.map((producto) => {
                       return <Producto key={producto.id} producto={producto} />
                    })}
                    
                
            </div>
        </section>
     );
}

export default TodosLosProductos;