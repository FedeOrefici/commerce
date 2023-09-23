import { createContext, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [dataEdit, setDataEdit] = useState([])
    
    const handleAdd = (data) => {
        setProducts(prevProducts => [...prevProducts, data])
    }

    const handleDelete = (id) => {
        setProducts(products => products.filter((item) => item.id !== id))   
    }

    const handleEdit = (id) => {
        let dataFind = products.find((data) => data.id === id)
        setDataEdit(dataFind)
    }

    console.log(products)

    return (
        <ContextData.Provider value={{handleAdd, products, handleDelete, handleEdit, dataEdit}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;