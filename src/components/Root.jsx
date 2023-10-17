import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Root = () => {
  return (
    <div>
      <h1>root</h1>
      <Header></Header>

      <Outlet></Outlet>
    </div>
  )
}

export default Root
