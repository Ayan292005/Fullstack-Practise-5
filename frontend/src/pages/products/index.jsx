import React, { useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:2030/featuredProducts"

function Products() {
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


  function handleSortByName() {
    let sortedProducts = data.sort((a, b) => a.name.localeCompare(b.name))
    setData([...sortedProducts])
    console.log(sortedProducts);


  }
  return (
    <div style={{ backgroundColor: " #f8f9fa"}}>
      <div className='container'>
        <button onClick={handleSortByName} className='border border-black p-2 mr-1 mt-4'>Sort by name</button>
        <button onClick={getData} className='border border-black p-2'>Reset</button>

        <p className='text-center text-4xl my-5'>Featured Products</p>

        <div className='flex flex-wrap justify-between'>
          {data && data.map(product => (
            <div key={product._id} className='relative my-4 h-100 card bg-white' style={{ width: "31%" }}>

              <div className='flex flex-col items-center justify-center'>
                <img src={product.image} />
                <p className='font-medium prod-blue pt-10 text-lg'>{product.name}</p>
                <p style={{ color: "#8c92a0" }}>{product.desc}</p>
                <p className='prod-blue font-bold pb-10'>${product.price}</p>
              </div>

            </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Products
