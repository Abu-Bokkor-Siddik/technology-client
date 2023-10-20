import { useEffect } from 'react'
import Carosol from './Carosol'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'
import Ratting from './Ratting'

const Dynamicdd = () => {
    const [singeldata,setsingeldata] =useState()
    const [finalsingeldata,setfinalsingeldata] =useState([])
    const [alladditem,setalladditem]=useState([])
    // loading apply 
    const [loading,setloading]=useState(true)

    const {id} = useParams()
    const intid= parseInt(id)
    const data = useLoaderData()
    

    useEffect(()=>{
// setloading
      setloading(true)

        const selectdata =data?.find((item)=> item.id===intid);
        setsingeldata(selectdata)
        
        
    },[data,intid])
    

// database get all data 
useEffect(()=>{
  // setloading
  setloading(true)

  fetch('https://server-ass-side-2wbl1ssjj-mdmasud01833798650-gmailcom.vercel.app/add')
  .then(res => res.json())
  .then(data => setalladditem(data))
},[])




useEffect(()=>{
  // setloading
  setloading(true)

  const filter = alladditem.filter(Brand=>Brand?.brand?.toLowerCase() == singeldata?.name?.toLowerCase())
setfinalsingeldata(filter)

// setloading false
setloading(false)

},[alladditem,singeldata])
console.log(finalsingeldata)

  return (
    <div>
    
      
      <Carosol singeldata={singeldata}></Carosol>
      {/*loading */}
      {loading && <span className="loading loading-spinner loading-lg mt-10"></span>}


 <div className='max-w-4xl lg:mx-auto grid mx-9 grid-cols-1 lg:grid-cols-2 gap-3 dark:bg-black dark:text-white '>
      {
        finalsingeldata.map(card=><div key={card._id} className="card w-72 h-[400px] bg-blue-300 shadow-xl mt-28 dark:bg-black dark:text-white dark:shadow-slate-700">
        <figure><img className='h-full' src={card?.photo} alt="Shoes" /></figure>
        
        
            <div className='flex gap-14 text-lg font-semibold my-2'><p>{card.brand}</p> <div><Ratting></Ratting></div></div>
            <div className='flex gap-28 my-2'><p>{card.type}</p> <p>price:{card.price}</p></div>
            <p className='text-start my-2 text-lg'>{card.name}</p>
            
      
            <div className='flex gap-16 '><Link to={`/details/${card._id}`}><button className='btn btn-secondary   dark:bg-black dark:text-white'>Details</button></Link> <Link to={`/update/${card._id}`}><button className='btn btn-primary dark:bg-black dark:text-white'>Update</button></Link></div>
        
      
      </div>)
      }
      
      </div>
      
    </div>
  )
}

export default Dynamicdd
