import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextData'



const Edit = () => {

  const {dataEdit} = useContext(ContextData)
  console.log(dataEdit, 'desde edit');

  return (
    <div>
      <p>edit component</p>
      <p>{dataEdit.name}</p>
      <p>{dataEdit.description}</p>
      <p>{dataEdit.price}</p>
    </div>
  )
}

export default Edit
