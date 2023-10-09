
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [favorites, setFavorites] = useState([])

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


    


    const addFavs = (id) => {
        const findProduct = products?.drinks?.find((prod) => prod.idDrink === id)
        findProduct ? setFavorites(findProduct) : console.log('no se encuentra el ID') 
        
    }
    

    

    return (
        <ContextData.Provider value={{addFavs, products}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;