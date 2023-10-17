import React from 'react'
import Bennar from './Bennar'
import { useLoaderData } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  const datas = useLoaderData() 
  console.log(datas)
  return (
    <div>
      <h1>Home</h1>
      <Bennar></Bennar>
      <div className=''>
      <p className='text-4xl'> Brand Name</p>
      <div className='grid grid-cols-3 gap-20 max-w-6xl mx-auto'>
      {
        datas.map(item => <div key={item.id} onClick={()=>console.log('onclick' ,item.id)} className="card w-72 h-96 bg-blue-500 shadow-xl">
        <figure className="">
          <img  src={item.img} alt="Shoes" className="rounded-xl w-56 h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          
        </div>
      </div>)
      }
      
      </div>
      {/* footer */}

      <Footer></Footer>
     
      
      
      </div>
    </div>
  )
}

export default Home
