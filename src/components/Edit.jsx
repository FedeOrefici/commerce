import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextData'



const Edit = () => {

  const {dataEdit} = useContext(ContextData)
  console.log(dataEdit, 'desde edit')

  return (
    <div>
      {dataEdit && dataEdit?.map((item) => {
        <div key={item.id}>
        <p>{item.name}</p>
        </div>
      })}
    </div>
  )
}

export default Edit
