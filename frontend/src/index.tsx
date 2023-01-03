import './index.css';
import { App, Home } from './components';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "home",
                element: <Home/>
            }
        ]
    }
])
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript


root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
