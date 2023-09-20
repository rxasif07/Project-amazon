import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../Product/Product';

const myCreatedRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element :<Home></Home>
            },
            {
                path : '/products',
                loader:()=>fetch('https://dummyjson.com/products'),
                element :<Products></Products>
            },
            {
                path:'/products/:id',
                loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`),
                element :<Product></Product>
                

            },
            {
                path : '/dashboard',
                element : <div>fuck</div>
            }

        ]
    }
])
export default myCreatedRoute;