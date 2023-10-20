
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Details = () => {
    const data =useLoaderData()
    // button disable
    const [isButtonDisabled, setButtonDisabled] = useState(false);
  //  user added products requrement 8
  console.log(data)
    const addedbyuser=()=>{
      

      try{
      fetch("http://localhost:3004/user",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    }
    
    )
    .then(result => result.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'Product added successfully.',
          'success'
        )
      }
      console.log(data)
    }
   
    
    )

// bang
    setButtonDisabled((pre)=>!pre)}catch(error){
      console.log(error)
    }
    }
  return (
    <div className='max-w-3xl mx-auto mt-44 '>
      

   
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={data.photo}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
     {data.brand}
    </h6>

    <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {data.type}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    {data.short}
    </p>
    <div className='mb-5'><p>price : {data.price}</p></div>
    <a className="inline-block" href="#">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-black"
        type="submit"
        onClick={addedbyuser}
        disabled={isButtonDisabled}
        
      >
      
     {isButtonDisabled?'Disabled':' Add to Cart'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>




      
    </div>
  )
}

export default Details
