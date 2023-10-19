import React from 'react'
import Bennar from './Bennar'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  const datas = useLoaderData() 
  
  return (
    <div className='dark:bg-black'>
      
      <Bennar></Bennar>
      <div className=''>
      <p className='text-4xl my-16'> Brand Name & Image</p>
      <div className='grid grid-cols-3 gap-20 max-w-6xl mx-auto my-12' >
      {
        datas.map(item => <div key={item.id}> <Link to={`/dynamic/${item.id}`}> <div
            className="card w-72 h-96 bg-blue-500 shadow-xl">
      
        <figure>
          <img  src={item.img} alt="Shoes" className="rounded-xl w-56 h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          
        </div>
      </div>
      </Link>
      </div>
      
      )
      }
      
      </div>

      {/*contacts */}
      {/*feedback */}
      {/*gallary*/}
      

      <div></div>
      {/* footer */}

      <Footer></Footer>
     
      
      
      </div>
    </div>
  )
}

export default Home
