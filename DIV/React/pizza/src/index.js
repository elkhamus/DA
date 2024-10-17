import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './component/App'
import Main from './component/Main'
import Pizza from './component/Pizza'
import Contact from './component/Contact'

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { path: "/", element: <Main /> },
    { path: "/main", element: <Main /> },
    { path: "/pizza", element: <Pizza /> },
    { path: "/contact", element: <Contact /> }
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)
