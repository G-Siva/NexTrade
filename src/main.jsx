import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Trading from './Pages/Trading/Trading.jsx'
import Help from './Pages/Help/Help.jsx'
import Education from './Pages/Education/Education.jsx'
import Auth from './Pages/Auth/Auth.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/trading",
        element:<Trading/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/education",
        element:<Education/>
      },
      {
        path:"/login",
        element:<Auth/>
      },
      {
        path:"/register",
        element:<Auth/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
