import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
let DBurl = "http://localhost:2030/featuredProducts"


function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      desc: '',
      price: ''

    },
    onSubmit: values => {
      axios.post("http://localhost:2030/featuredProducts", values)
    },
  })

  let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)

      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el._id !== id)
    setData(dataId)

    axios.delete(`${DBurl}/${id}`)
      .then(() => {
        getData()
      })
  }



  return (
    <>
      <form onSubmit={formik.handleSubmit} className='container flex flex-col items-start gap-2' style={{ marginTop: "40px" }}>
        <div className='flex gap-3 justify-between' style={{ width: "300px" }}>
          <label htmlFor="image">Image</label>
          <input className='border'
            required
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>

        <div className='flex gap-3  justify-between' style={{ width: "300px" }}>
          <label htmlFor="name">Name</label>
          <input className='border'
            required
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className='flex gap-3  justify-between' style={{ width: "300px" }}>
          <label htmlFor="desc">Description</label>
          <input className='border'
            required
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
        </div>


        <div className='flex gap-3  justify-between' style={{ width: "300px" }}>
          <label htmlFor="price">Price</label>
          <input className='border'
            required
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>

        <button type="submit" onClick={() => navigate("/products")} className='border border-black p-1'>Submit</button>
      </form>

      <table className='container' style={{ marginTop: "50px" }}>
        <thead>
          <tr className='text-left'>
            <th>image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            data && data.map(product => (
              <tr key={product.id}>
                <td><img src={product.image} alt="" style={{ width: "80px", height: "80px", objectFit: "contain" }} /></td>
                <td>{product.name}</td>
                <td>{product.desc}</td>
                <td>{product.price}$</td>
                <td><button className='bg-red-500 p-2 text-white' onClick={() => deleteData(product._id)}>Delete</button></td>


              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Add
