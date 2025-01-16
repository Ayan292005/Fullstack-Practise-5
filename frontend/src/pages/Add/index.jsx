import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';

function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      image:'',
      name: '',
      description:''

    },
    onSubmit: values => {
     axios.post("http://localhost:3030/people",values)
    },
  })


  return (
    <>
      <form onSubmit={formik.handleSubmit} className='container flex flex-col items-start gap-2' style={{marginTop:"40px"}}>
      <div className='flex gap-3 justify-between' style={{width:"300px"}}>
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

        <div className='flex gap-3  justify-between' style={{width:"300px"}}>
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

        <div className='flex gap-3  justify-between' style={{width:"300px"}}>
        <label htmlFor="description">Description</label>
        <input className='border' 
          required
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        </div>

        <button type="submit" onClick={() => navigate("/people")} className='border border-black p-1'>Submit</button>
      </form>
    </>
  )
}

export default Add
