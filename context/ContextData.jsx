
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const axiosData = async () => {
            try {
                const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
                const response = await axios.get(endpoint)
                setProducts(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        axiosData()
    }, [])

    
    const handleAdd = (data) => {
        setProducts(prevProducts => [...prevProducts, data])
    }

    const handleDelete = (id) => {
        setProducts(products => products.filter((item) => item.id !== id))   
    }

    console.log(products)

    return (
        <ContextData.Provider value={{handleAdd, products, handleDelete, products}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;