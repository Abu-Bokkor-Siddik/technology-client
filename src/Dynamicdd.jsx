import React, { useEffect } from 'react'
import Carosol from './Carosol'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'
import Ratting from './Ratting'

const Dynamicdd = () => {
    const [singeldata,setsingeldata] =useState()
    const [finalsingeldata,setfinalsingeldata] =useState([])
    const [alladditem,setalladditem]=useState([])

    const {id} = useParams()
    const intid= parseInt(id)
    const data = useLoaderData()
    

    useEffect(()=>{
        const selectdata =data?.find((item)=> item.id===intid);
        setsingeldata(selectdata)
        
        
    },[data,intid])
    

// database get all data 
useEffect(()=>{
  fetch('http://localhost:3004/add')
  .then(res => res.json())
  .then(data => setalladditem(data))
},[])

// console.log(alladditem)
// console.log(singeldata)


useEffect(()=>{

  const filter = alladditem.filter(Brand=>Brand?.brand?.toLowerCase() == singeldata?.name?.toLowerCase())
setfinalsingeldata(filter)

},[alladditem,singeldata])
console.log(finalsingeldata)

  return (
    <div>
    
      <h1>dynamicdd</h1>
      <Carosol singeldata={singeldata}></Carosol>
 <div className='max-w-4xl mx-auto grid grid-cols-2 gap-3'>
      {
        finalsingeldata.map(card=><div key={card._id} className="card w-72 h-[400px] bg-blue-300 shadow-xl mt-28">
        <figure><img className='h-full' src={card?.photo} alt="Shoes" /></figure>
        
            <div className='flex gap-20'><p>{card.brand}</p> <div><Ratting></Ratting></div></div>
            <div className='flex gap-28'><p>{card.type}</p> <p>price:{card.price}</p></div>
      
            <div className='flex gap-16'><Link to={`/details/${card._id}`}><button className='btn btn-secondary'>Details</button></Link> <Link to={`/update/${card._id}`}><button className='btn btn-primary'>Update</button></Link></div>
        
      
      </div>)
      }
      
      </div>
      
    </div>
  )
}

export default Dynamicdd
