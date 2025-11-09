import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        //errorElement: 
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
])

