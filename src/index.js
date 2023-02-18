import React from 'react'
import ReactDOM from 'react-dom/client'

import './Styles/normalize.css'
import './index.css'

import Home from './Pages/Home/home'
import About from './Pages/About/index'
import Housing from './Pages/Housing/index'
import Header from './Components/header/Hearder'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/index'

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
