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
    <div className=''>
      

      <div className="navbar dark:bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <NavLink to="/">Home</NavLink>
       <NavLink to="/add">Add Product</NavLink>
       <NavLink to="/card">My Card</NavLink>
       <NavLink to="/login">Login</NavLink>
      </ul>
    </div>
    <img className='w-14 h-14' src="https://i.ibb.co/M75cvNT/pngtree-natural-eco-electronic-logo-image-471899-1.jpg" alt="" />

    <p className='text-lg font-bold'>Technology and Electronics</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-10 px-1">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add">Add Product</NavLink>
      <NavLink to="/card">My Cart</NavLink>
      <NavLink to="/login">Login</NavLink>
    </ul>
  </div>
  <div className="navbar-end ">
  <p >Name:{(user?.displayName)||(names&&names) }</p>


  <div className="avatar">
  <div className="w-12 mx-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={(user?.photoURL) || (photo&&photo)} />
  </div>
</div>
   {
    user?( <a className="btn btn-accent" onClick={handellogout}>Log out</a>):
    <Link to='/login' className="btn btn-accent">Login </Link>
   }
  {/*button dark */}
 <button onClick={()=>{
  setdarkModes(!darkModes)
 }} className='btn btn-accent ml-4'>dark</button>
  </div>
</div>
    </div>
  )
}

export default Header
