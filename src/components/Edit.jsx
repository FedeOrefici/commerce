import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextData'



const Edit = () => {

  const {dataEdit} = useContext(ContextData)
  console.log(dataEdit, 'desde edit');

  return (
    <div>
      <p>edit component</p>
      <form>
        <input type='text' value={dataEdit.name} name='name' />
        <button>edit</button>
      </form>
    </div>
  )
}

export default Edit
