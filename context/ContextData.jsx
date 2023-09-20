import { createContext, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {

    const [products, setProducts] = useState([])
    
    const handleAdd = (data) => {
        setProducts(prevProducts => [...prevProducts, data])
    }

    return (
        <ContextData.Provider value={{handleAdd, products}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;