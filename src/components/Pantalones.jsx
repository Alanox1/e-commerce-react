import productos from "../data"
import Producto from "./Producto";
const pantalones = productos.filter((producto) => producto.categoria.nombre === "Pantalones")
function Pantalones() {
    return ( 
        <section>
            <h2 style={{color : "#785ce9"}}>Pantalones</h2>
            <div style={{display :  "grid", 
                        gridTemplateColumns : "repeat(auto-fit,minmax(200px, 1fr))",
                        gap : "16px"
                }}>
                
                    {pantalones.map((producto) => {
                       return <Producto key={producto.id} 
                                        producto={producto} 
                              />
                    })} 
                    
                
            </div>
        </section>
     );
}

export default Pantalones;