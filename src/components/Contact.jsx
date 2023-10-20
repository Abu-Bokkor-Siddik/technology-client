import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-4xl  my-10  dark:bg-black  dark:text-white  font-semibold'>Contact</h1>
      <div className="hero lg:h-[650px] shadow-2xl mb-10" style={{backgroundImage: 'url(https://i.ibb.co/frGMjbc/pngtree-blue-digital-technology-electronic-banner-image-168524.jpg)'}} >
      <div className="hero-content flex-col lg:flex-row-reverse gap-28 ">
        <div className=" flex flex-col gap-10 lg:text-left">
          <h1 className='text-5xl text-white  text-center'>Contact Us To Get Better Information</h1>
          <p className='text-2xl text-white text-center'>Let’s Talk</p>
          <div className='text-white text-center'><p>L : 38/3 South Rajashon Savar,Dhaka</p>
          <p>P : +088 01833798650</p>
          <p>E : technology@gmail.com</p>
          <p></p></div>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-black  dark:text-white">
          <form className="card-body">
          <p>Leave A Message</p>
            <div className="form-control">
              
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              
              <input type="text" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              
              <input type="text" placeholder="Subject" className="input input-bordered" required />
            </div>
            <div className="form-control">
              
              <textarea className='pl-1' name="message" id="" cols="10" rows="3" placeholder='message here'></textarea>
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-primary dark:bg-black dark:text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Contact
