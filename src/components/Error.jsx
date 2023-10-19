import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='max-w-6xl mx-auto mt-56'>
      <h1 className='text-6xl'> 404 Error</h1>
      <p className='text-xl my-6'>This page not found </p>
      <p> <Link to='/'><button className='btn btn-secondary '>Go Home page</button></Link></p>
    </div>
  )
}

export default Error
