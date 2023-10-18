import React from 'react'

const Add = () => {
  const handeladd =(e)=>{
    e.preventDefault()
   
    const name = e.target.name1.value
    const brand = e.target.brand.value
    const type= e.target.type.value
    const price = e.target.price.value
    const short = e.target.short.value
    const rating = e.target.rating.value
    const photo = e.target.photo.value
    console.log(name,brand,type,price,short,rating,photo)
    
    const itemdata = {name,brand,type,price,short,rating,photo}

    fetch("http://localhost:3004/add",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(itemdata)
    }
    
    )
    .then(result => result.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div>
      <h1>add</h1>

      {/* form  */}

      <div className="hero -mt-60 min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left  "></div>
          <div className="card flex-shrink-0 w-[1000px]  shadow-2xl bg-base-100">
            <form onSubmit={handeladd} className="card-body ">
              <p className="text-3xl">add item</p>

              <div className="form-control flex flex-row gap-6 my-6">
                <label className="label ">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name1"
                  type="text"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text ">Brand</span>
                </label>
                <input
                  type="text"
                 name='brand'
                  placeholder="Brand Name"
                  className="input input-bordered w-96"
                  required
                />
              </div>

              <div className="form-control flex flex-row gap-5 my-6">
                <label className="label ">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  name='type'
                  placeholder="phone, computer, headphone, etc"
                  className="input input-bordered w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name='price'
                  placeholder="Price"
                  className="input input-bordered w-96"
                  required
                />
              </div>

              <div className="form-control  flex flex-row gap-5 my-6">
                <label className="label ">
                  <span className="label-text">Short:</span>
                </label>
                <input
                  type="text"
                  name='short'
                  placeholder="Short description"
                  className="input input-bordered w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name='rating'
                  placeholder="Rating"
                  className="input input-bordered w-96"
                  required
                />
              </div>

              <div className="form-control flex flex-row my-6">
                <label className="label">
                  <span className="label-text">Image url  </span>
                </label>
                <input
                  type="text"
                  name='photo'
                  placeholder="Image Url"
                  className="input input-bordered  min-w-[800px]"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add