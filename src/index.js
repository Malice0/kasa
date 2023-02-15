import React from 'react'
import ReactDOM from 'react-dom/client'

import './Styles/normalize.css'
import './index.css'

import Home from './Pages/Home/home'
import About from './Pages/About/index'
import Housing from './Pages/Housing/index'
import Header from './Components/header/Hearder'
import Footer from './Components/header/Footer/Footer'
import Error from './Components/Error/index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'housing',
                element: <Housing />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>
)
