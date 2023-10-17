import React, { useContext } from 'react'
import { contexs } from './Authprovider'
import { Navigate } from 'react-router-dom'

const Privet = ({children}) => {
    const {user,loading}=useContext(contexs)
    if(loading){
        return <span className="loading loading-spinner loading-lg flex mx-auto justify-center"></span>
    }
    if(user){
        return children
    }
      
    
  return (
    <Navigate to='/login'>
      
    </Navigate>
  )
}

export default Privet
