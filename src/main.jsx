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
        element:<Card></Card>
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
