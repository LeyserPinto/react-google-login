import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Profile from './profile';

const router = createBrowserRouter([
  {
    path: "react-google-login/",
    element: <App />
  },
  {
    path: "/react-google-login/profile",
    element: <Profile />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
