import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Update = () => {
    const data = useLoaderData()

    console.log(data)

    const updatainfo = (e)=>{
        e.preventDefault()
        const name = e.target.name1.value
    const brand = e.target.brand.value
    const type= e.target.type.value
    const price = e.target.price.value
    const photo = e.target.short.value
    const rating = e.target.rating.value
   
    console.log(name,brand,type,price,photo,rating,)
    const itemdatainfo = {name,brand,type,price,photo,rating}

    fetch(`http://localhost:3004/add/${data._id}`,{
        method:"PUT",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(itemdatainfo)
      }
      
      )
      .then(result => result.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount>0){
          Swal.fire(
            'Good job!',
            'Product update successfully',
            'success'
          )
          
        }
      })

    }
  return (
    <div>
      
<div>
<form onSubmit={updatainfo}  className=" w-auto lg:w-[700px] shadow-2xl mx-auto mt-40 p-16  dark:bg-black">
              <p className="text-3xl dark:text-white">Update Card</p>

              <div className="form-control flex flex-col lg:flex-row gap-5 my-6">
                <label className="label ">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  name="name1"
                  type="text"
                  placeholder="Enter coffee name" defaultValue={data.name}
                  className="input input-bordered w-auto lg:w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text dark:text-white ">Brand</span>
                </label>
                <input
                  type="text"
                 name='brand'
                 defaultValue={data.brand}
                  placeholder="Brand Name"
                  className="input input-bordered w-auto lg:w-96"
                  required
                />
              </div>

              <div className="form-control flex flex-col lg:flex-row gap-6 my-6">
                <label className="label ">
                  <span className="label-text dark:text-white">Type</span>
                </label>
                <input
                  type="text"
                  name='type'
                  defaultValue={data.type}
                  placeholder="phone, computer, headphone, etc"
                  className="input input-bordered w-auto lg:w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text dark:text-white">Price</span>
                </label>
                <input
                  type="text"
                  name='price'
                  defaultValue={data.price}
                  placeholder="Price"
                  className="input input-bordered w-auto lg:w-96"
                  required
                />
              </div>

              <div className="form-control  flex flex-col lg:flex-row gap-5 my-6">
                <label className="label ">
                  <span className="label-text dark:text-white">Img:</span>
                </label>
                <input
                  type="text"
                  name='short'
                  defaultValue={data.photo}
                  placeholder="Short description"
                  className="input input-bordered w-auto lg:w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text dark:text-white">Rating</span>
                </label>
                <input
                  type="text"
                  name='rating'
                  defaultValue={data.rating}
                  placeholder="Rating"
                  className="input input-bordered w-auto lg:w-96"
                  required
                />
              </div>

              
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary dark:bg-black dark:text-white">Add Item</button>
              </div>
            </form>




</div>

    
    </div>
  )
}

export default Update
