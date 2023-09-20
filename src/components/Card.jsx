import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextData'

const Card = () => {

    const {products, handleDelete} = useContext(ContextData)


  return (
    <>
      {products.map((pd) => (
        <div key={pd.id}>
            <p>{pd.name}</p>
            <p>{pd.description}</p>
            <p>{pd.price}</p>
            <button onClick={() => handleDelete(pd.id)}>delete</button>
            <button>edit</button>
        </div>
      ))}
    </>
  )
}

export default Card
