import React from 'react'
import Bennar from './Bennar'
import { Link, useLoaderData } from 'react-router-dom'
import Footer from './Footer'
import Contact from './Contact'
import Carosol from './Carosol'

const Home = () => {
  const datas = useLoaderData() 
  
  return (

   

    <div className='dark:bg-black max-w-[1540px] '>
      
      <Bennar></Bennar>
      <div className=''>
      <p className='text-4xl my-16 font-semibold  dark:bg-black  dark:text-white '> Brand Name & Image</p>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-11 lg:grid-cols-3 gap-20 max-w-6xl lg:mx-auto my-12 ' >
      {
        datas.map(item => <div key={item.id}> <Link to={`/dynamic/${item.id}`}> <div
            className="card w-72 h-96 da dark:bg-black dark:shadow-slate-700 bg-blue-500 shadow-xl">
      
        <figure>
          <img  src={item.img} alt="Shoes" className="rounded-xl w-56 h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title dark:text-white text-white">{item.name}</h2>
          
        </div>
      </div>
      </Link>
      </div>
      
      )
      }
      
      </div>

      {/*contacts */}

      <Contact></Contact>
      {/*feedback */}
      {/*gallary*/}
      <Carosol></Carosol>
      <button className='btn  dark:bg-black  dark:text-white bg-blue-500 text-white my-10 '>See More details</button>
      

      <div></div>
      {/* footer */}

      <Footer></Footer>
     
      
      
      </div>
    </div>
  )
}

export default Home
