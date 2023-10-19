import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import Card from './components/Card.jsx';
import Add from './components/Add.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Authprovider from './components/Authprovider.jsx';
import Privet from './components/Privet.jsx';
import Dynamicdd from './Dynamicdd.jsx';
import Details from './Details.jsx';
import Update from './Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('/fake.json')
      },
      {
        path:"/card",
        element:<Card></Card>,
        loader:()=>fetch('http://localhost:3004/user')
      },
      {
        path:"/add",
        element:<Privet><Add></Add></Privet>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/regist",
        element:<Register></Register>
      },
      {
        path:"/dynamic/:id",
        element:<Dynamicdd></Dynamicdd>,
        loader:()=> fetch('/fake.json')
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:3004/add/${params.id}`)
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:3004/add/${params.id}`)
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  </React.StrictMode>,
)
