import productos from "../data"
import Producto from "./Producto";
const camisetas = productos.filter((producto) => producto.categoria.nombre === "Camisetas")
function Camisetas() {
    return (
        <section>
            <h2 style={{color : "#785ce9"}}>Camisetas</h2>
            <div style={{display :  "grid", gridTemplateColumns : "repeat(auto-fit,minmax(200px, 1fr))",gap : "16px"}}>
                
                    {camisetas.map((producto) => {
                       return <Producto key={producto.id} producto={producto} />
                    })} 
                    
                
            </div>
        </section>
    );
}

export default Camisetas;