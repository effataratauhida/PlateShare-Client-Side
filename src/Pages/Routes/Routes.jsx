import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Error from '../Error/Error';
import AvailableFoods from '../Available-Foods/AvailableFoods';
import FoodDetails from '../Private-Routes/FoodDetails';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import AuthLayout from '../AuthLayout/AuthLayout'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error> ,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
            path: '/availableFoods',
            element: <AvailableFoods></AvailableFoods>,
            loader: () => fetch('http://localhost:3000/foodData')
            }, 
            {
                path: '/food/:id',
                element: <FoodDetails></FoodDetails>,
                loader: () => fetch('http://localhost:3000/foodData')

            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/registration',
            //     element: <Registration></Registration>
            // }
        ]
    },
    {
          path: '/auth',
          element: <AuthLayout></AuthLayout>,
          children: [
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'registration',
              element: <Registration></Registration>
            },
        // {
        //   path: 'forgotPassword',
        //   element: <ForgotPassword></ForgotPassword>
        // }

            
          ]
        }
])

