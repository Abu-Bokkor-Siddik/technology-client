import React from 'react'

const Add = () => {
  return (
    <div>
      <h1>add</h1>

      {/* form  */}

      <div className="hero -mt-60 min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left  "></div>
          <div className="card flex-shrink-0 w-[1000px]  shadow-2xl bg-base-100">
            <form className="card-body ">
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
                  placeholder="phone, computer, headphone, etc"
                  className="input input-bordered w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
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
                  placeholder="Short description"
                  className="input input-bordered w-96"
                  required
                />
                <label className="label ">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
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
                  placeholder="Image Url"
                  className="input input-bordered  min-w-[800px]"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
