import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import './components/module/bootstrap.min.css'
import './components/module/bootstrap.bundle.min.js'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Components */
import Home from './components/pages/Home'
import About from './components/pages/About'
import Event from './components/pages/Event'
import Homework from './components/pages/Homework'
import Inspector from './components/pages/Inspector'
import Work from './components/pages/Work'
import Notfound from './components/Notfound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/homework",
    element: <Homework />,
  },
  {
    path: "/inspector",
    element: <Inspector />,
  },
  {
    path: "/work",
    element: <Work />
  },
  {
    path: "*",
    element: <Notfound status={404} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
