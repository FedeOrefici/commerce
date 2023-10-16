
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [favorites, setFavorites] = useState([])
    const [favs, setFavs] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        const axiosData = async () => {
            try {
                const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
                const response = await axios.get(endpoint)
                setProducts(response?.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        axiosData()
    }, [])

    console.log(products);

    const addFavs = (id) => {
        const findProduct = products?.drinks?.find((prod) => prod.idDrink === id)
        if(findProduct){
            if(favorites.some((fav) => fav.idDrink === findProduct.idDrink)){
                return
            }     
        }
        setFavorites((prevDrink) => [...prevDrink, findProduct])
        setFavs(true)
    }

    const delFavs = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.idDrink !== id))
        setFavs(false)
    }

    return (
        <ContextData.Provider value={{
            addFavs,
            products,
            favorites,
            delFavs,
            favs,
            setFilteredData,
            filteredData,
            setIsSearching,
            isSearching}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;