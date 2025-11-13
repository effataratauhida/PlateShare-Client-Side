import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Error from '../Error/Error';
import AvailableFoods from '../Available-Foods/AvailableFoods';
import FoodDetails from '../Private-Routes/FoodDetails';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import AuthLayout from '../AuthLayout/AuthLayout';
import AddFood from '../Private-Routes/AddFood';
import PrivateRoutes from '../../Components/privateRoutes';
import ManageMyFoods from '../Private-Routes/ManageMyFoods';
import UpdateFood from '../UpdateFood/UpdateFood';
import MyFoodRequests from '../Private-Routes/MyFoodRequests';
import PrivateLayout from '../Private-Routes/PrivateLayout';



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
                element: (
                  <PrivateRoutes>
                    <FoodDetails></FoodDetails>
                  </PrivateRoutes>
                ),
                
                loader: ({ params }) => fetch(`http://localhost:3000/foodData/${params.id}`)

            },

            {
              path:'/addFood',
              element: (
                <PrivateRoutes>
                  <AddFood></AddFood>
                </PrivateRoutes>
                  
               
              )
            },
            {
              path: '/manageFoods',
              element: (
                <PrivateRoutes>
                  <ManageMyFoods></ManageMyFoods>
                </PrivateRoutes>
              )
            },
            {
              path: '/foodRequest',
              element: (
                <PrivateRoutes>
                  <MyFoodRequests></MyFoodRequests>
                </PrivateRoutes>
              )
            },
            {
              path: "/updateFood/:id",
              element: (
                 <PrivateRoutes>
                  <UpdateFood></UpdateFood>
                 </PrivateRoutes>
              ) ,
              loader: ({ params }) => fetch(`http://localhost:3000/foodData/${params.id}`)
}
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

