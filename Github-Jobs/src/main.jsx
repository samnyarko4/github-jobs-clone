import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Details from './views/details.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter ([
{
  path:'/',
  element:<App/>
},
{
  path:'details/:title',
  element:<Details />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
