import { createContext, useState } from "react"

export const ContextCarrito = createContext(null)
 const initialData = []
export function CarritoProvider ({children}) {

    const [data,setData] = useState(initialData)
    
   return <ContextCarrito.Provider value={[data,setData]}>
       {children}
    </ContextCarrito.Provider>
}