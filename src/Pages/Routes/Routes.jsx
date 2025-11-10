import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Error from '../Error/Error';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error> ,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
])

