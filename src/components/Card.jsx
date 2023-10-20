import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Card = () => {
  const loadeddata =useLoaderData()
  const [loadeddata1,setloadeddata1]= useState(loadeddata)
  const addedProductDelete=(id)=>{
    console.log(id)

 
 fetch(`https://server-ass-side-1wnb55yv7-mdmasud01833798650-gmailcom.vercel.app/user/${id}`,{
  method:"DELETE"
 })
 .then(res =>res.json())
 .then(data=> {
  if(data.deletedCount>0){
    
    // and delete this product in ui
    const deleteP= loadeddata1.filter(product => product._id !== id)
    setloadeddata1(deleteP)
    return Swal.fire(
      'Good job!',
      'Product Delete successfully.',
      'success'
    )
  }
  console.log(data)
 }


 )
 
  }
  return (
    <div className=' dark:bg-black max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 mt-40 gap-10 '>

      

      {
        loadeddata1.map(added=><div key={added._id} className=" mx-auto card card-compact  lg:w-96 h-[500px] bg-base-100 shadow-2xl dark:bg-black dark:shadow-slate-700 dark:text-white">
        <figure><img src={added.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{added.brand}</h2>
          <div className='flex gap-28'><p>{added.type}</p><p>price : {added.price}</p></div>
          <p className='text-start ml-4'>{added.short}</p>
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
