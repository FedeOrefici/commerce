import React, { useContext } from 'react'
import Navbar from './Navbar'
import { ContextData } from '../../context/ContextData'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {

    const {products} = useContext(ContextData)
    const {id} = useParams()

    const item = products.find((drink) => drink.id === id)

    console.log(item);
    

  return (
    <div>
        <Navbar />
       
           { <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <img src={item.image} />
            </div>}
     
    </div>
  )
}

export default ItemDetail
