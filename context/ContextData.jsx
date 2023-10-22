
    import axios from "axios";
    import { createContext, useEffect, useState } from "react";

    export const ContextData = createContext()

    const ContextDataProvider = ({children}) => {

        const [products, setProducts] = useState([])
        const [favorites, setFavorites] = useState([])
        const [filteredData, setFilteredData] = useState([])
        const [isSearching, setIsSearching] = useState(false)
        const [currentPage, setCurrentPage] = useState(1)
        const [originalProducts, setOriginalProducts] = useState([])

        //paginate
        const totalItems = products.length
        const elementPerPage = 3
        const totalPages = Math.ceil(totalItems / elementPerPage)

        //calculate pages
        const startIdx = (currentPage - 1) * elementPerPage
        const endIdx = startIdx + elementPerPage
        const currentItems = products?.slice(startIdx, endIdx)

        //get data fron API, prod arr.
        useEffect(() => {
            const axiosData = async () => {
                try {
                    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
                    const response = await axios.get(endpoint)
                    const drinks = response?.data?.drinks?.map((item) => ({
                        id: item.idDrink,
                        name: item.strGlass,
                        image: item.strDrinkThumb,
                        description: item.strInstructions,
                        isFavorite: false,
                    }))
                    setProducts(drinks)
                    setOriginalProducts(drinks)
                } catch (error) {
                    console.log(error.message)
                }
            }
            axiosData()
        }, [])

        //add favs
        const addFavs = (id) => {
            const findProduct = products?.find((prod) => prod.id === id)
            if(findProduct){
                if(favorites.some((fav) => fav.id === findProduct.id)){
                    return
                }     
            }
            findProduct.isFavorite = true;
            setFavorites((prevDrink) => [...prevDrink, findProduct])
        }

        //del favs
        const delFavs = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== id))
        setProducts((prevProducts) => {
            return prevProducts.map((product) => {
                if(product.id === id) {
                    return {...product, isFavorite: false}
                }
                return product;
                })
            })
        }


        return (
            <ContextData.Provider value={{
                addFavs,
                products,
                favorites,
                delFavs,
                setFilteredData,
                filteredData,
                setIsSearching,
                isSearching, 
                currentPage,
                setCurrentPage,
                totalPages,
                currentItems,
                setProducts,
                originalProducts
                }}>
                {children}
            </ContextData.Provider>
        )
    }

    export default ContextDataProvider;