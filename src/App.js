import { useState } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Courses from './Components/Courses';
import Others from './Components/Others';
import NotFound from './Components/NotFound';
import SecretRoute from './Components/SecretRoute';
import Login from './Components/Login';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"about",
    element : <AboutUs />,
  },
  {
    path:'/courses',
    element: <Courses />,
  },
  {
    path: '/others',
    element: <SecretRoute />,
    children: [
      {
        path: '/others',
        element: <Others />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
const App = ()=>{
  return <RouterProvider router= {router} />
   

  
}
 

export default App ;
