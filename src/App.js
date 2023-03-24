import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import { LoadDataExt } from './components/LoadDataExt/LoadDataExt';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children:[
          {
            path:'/',
            element:<Shop></Shop>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signup',
            element: <Signup></Signup>
          },
          {
            path: '/order',
            // loader: () => {
            //   return fetch('products.json')
            // },
            loader: LoadDataExt,
            element: <Order></Order>
          }
        ]
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
