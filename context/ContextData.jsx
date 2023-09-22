import { createContext, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {

    const [products, setProducts] = useState([])
    
    const handleAdd = (data) => {
        setProducts(prevProducts => [...prevProducts, data])
    }

    const handleDelete = (id) => {
        setProducts(products => products.filter((item) => item.id !== id))
        
    }

    console.log(products)

    return (
        <ContextData.Provider value={{handleAdd, products, handleDelete}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;