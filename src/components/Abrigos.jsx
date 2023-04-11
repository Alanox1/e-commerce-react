import productos from "../data"
import Producto from "./Producto";
const abrigos = productos.filter((producto) => producto.categoria.nombre === "Abrigos")

function Abrigos() {

    return ( 
        <section>
            <h2 style={{color : "#785ce9"}}>Abrigos</h2>
            <div style={{display :  "grid", gridTemplateColumns : "repeat(auto-fit,minmax(200px, 1fr))",gap : "16px"}}>
                
                    {abrigos.map((producto) => {
                       return <Producto key={producto.id} producto={producto} />
                    })} 
                    
                
            </div>
        </section>
    );
    
}

export default Abrigos;