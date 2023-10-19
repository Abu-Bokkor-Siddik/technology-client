import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Card = () => {
  const loadeddata =useLoaderData()
  const [loadeddata1,setloadeddata1]= useState(loadeddata)
  const addedProductDelete=(id)=>{
    console.log(id)

 
 fetch(`http://localhost:3004/user/${id}`,{
  method:"DELETE"
 })
 .then(res =>res.json())
 .then(data=> {
  if(data.deletedCount>0){
    alert('delete')
    // and delete this product in ui
    const deleteP= loadeddata1.filter(product => product._id !== id)
    setloadeddata1(deleteP)
  }
  console.log(data)
 }


 )
 
  }
  return (
    <div className='max-w-5xl mx-auto grid grid-cols-2 mt-40 '>

      

      {
        loadeddata1.map(added=><div key={added._id} className=" mx-auto card card-compact w-96 bg-base-100 shadow-2xl">
        <figure><img src={added.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{added.brand}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button onClick={()=>addedProductDelete(added._id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>)
      }

      
    </div>
  )
}

export default Card
