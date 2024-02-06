import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Inicio from './components/pages/Inicio.jsx'
import Footer from './components/common/Footer.jsx'
import Menu from './components/common/Menu.jsx'
import Error404 from './components/pages/Error404.jsx'
import Administrador from './components/pages/Administrador.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu></Menu>,
    children:[
      {
        path:"/",
        element: <Inicio></Inicio>
      },
      {
        path: "/producto/:productId",
        element: <h1>Product id</h1>
      },
      {
        path: "/administrador",
        element: <Administrador></Administrador>
      },
      {
        path: "*",
        element: <Error404></Error404>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>,
)
