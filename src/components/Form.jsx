import React, { useContext, useState } from 'react'
import { v4 as idgenerator } from 'uuid'
import { ContextData } from '../../context/ContextData'

const Form = () => {

    const { handleAdd } = useContext(ContextData)
    const idGen = idgenerator()
    const [data, setData] = useState({
        id: idGen,
        name: '',
        description: '',
        price: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleAdd(data)
        setData({
            name: '',
            description: '',
            price: ''
        })
    }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>name</label>
            <input name='name' value={data.name} type='text' onChange={handleChange} />
        </div>
        <div>
            <label>description</label>
            <input name='description' value={data.description} type='text' onChange={handleChange} />
        </div>
        <div>
            <label>price</label>
            <input name='price' value={data.price} type='number' onChange={handleChange} />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default Form
