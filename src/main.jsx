import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import ContactUs from './components/ContactUs'
const router = createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children:[
  {
    path:"",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contactUs",
    element:<ContactUs/>
  }
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
