import {createContext,useState} from "react"
//este tenemos que consumir en app.js
export const FiltersContext = createContext()

//este nos permite acceder al contexto
export function FiltersProvider({children}){
    const [filter,setFilter] = useState({
        category:"all",
        minPrice: 0
      })
return(
    <FiltersContext.Provider value={{
        filter,setFilter
    }}>
        {children}
    </FiltersContext.Provider>

)
} 