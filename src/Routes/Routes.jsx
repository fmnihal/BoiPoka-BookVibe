import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../components/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index: true,
        path: '/',
        loader: ()=> fetch('booksData.json'),
        element: <Home></Home>
      }
    ]
  },
  {
    path: "/about",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index: true,
        path: '/',
        loader: ()=> fetch('booksData.json'),
        element: <Home></Home>
      }
    ]
  }
]);