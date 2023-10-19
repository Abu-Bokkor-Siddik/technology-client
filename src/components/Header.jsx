import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contexs } from './Authprovider'
import Darkmode from './Darkmode'

const Header = () => {

    const{user,logOut,photo,names}=useContext(contexs)
    console.log(photo)

    const handellogout =()=>{
        logOut()
        .then(result => console.log(result.user))
       .catch(error =>{
        console.log(error.message)
       })
    }
    // dark mood 
    const [darkModes,setdarkModes]=useState(false)

    useEffect(()=>{
 if(darkModes){
  document.documentElement.classList.add('dark')
 }else{
  
  document.documentElement.classList.remove('dark')
 }
    },[darkModes])
    
  return (
    <div className=' mb-10'>
      

      <div className="navbar dark:bg-black text-xl  ">
  <div className="navbar-start  ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-start ">
       <NavLink  to="/">Home</NavLink>


       <NavLink to="/add">Add Product</NavLink>
       <NavLink to="/card">My Card</NavLink>
       <NavLink to="/login">Login</NavLink>


       

       <p className=' text-base' >Name:{(user?.displayName)||(names&&names) }</p>

       {
        user?( <a className="btn bg-blue-500 w-28" onClick={handellogout}>Log out</a>):
        <Link to='/login' className="btn btn-accent">Login </Link>
       }
      {/*button dark */}
     <button onClick={()=>{
      setdarkModes(!darkModes)
     }} className='btn bg-blue-500  w-28 '>{darkModes?"Light":'Dark'}</button>



       
      </ul>

{/*dropdown end */}

    </div>
    <img className='w-14 h-14' src="https://i.ibb.co/M75cvNT/pngtree-natural-eco-electronic-logo-image-471899-1.jpg" alt="" />

    <p className=' text-sm lg:text-3xl font-bold '> Technology and Electronics</p>
  </div>
  <div className="navbar-center  hidden lg:flex  ">
    <ul className="menu text-lg menu-horizontal flex gap-10 px-1 font-semibold">
      <NavLink className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    } to="/">Home</NavLink>


      <NavLink className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    } 
       to="/add">Add Product</NavLink>


      <NavLink
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    }
      
      to="/card">My Cart</NavLink>


      <NavLink className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    }
      
      
      to="/login">Login</NavLink>
    </ul>
  </div>



  




  <div className="navbar-end flex flex-row  ">
  <p className='hidden lg:block' >Name:{(user?.displayName)||(names&&names) }</p>



  <div className="avatar  hidden lg:block  ">
  <div className="w-12 mx-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <img src={(user?.photoURL) || (photo&&photo)} />
  </div>


</div>

{/*button */}
<div className='hidden lg:block'>
   {
    user?( <a className="btn bg-blue-500" onClick={handellogout}>Log out</a>):
    <Link to='/login' className="btn btn-accent">Login </Link>
   }
  {/*button dark */}
 <button onClick={()=>{
  setdarkModes(!darkModes)
 }} className='btn bg-blue-500 ml-4'>{darkModes?"Light":'Dark'}</button>
  </div>


  </div>


  
</div>

    </div>
  )
}

export default Header
