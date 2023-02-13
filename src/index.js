import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/home'
import Header from './Components/header/Hearder'
import Footer from './Components/header/Footer/Footer'
import './Styles/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer />
    </React.StrictMode>
)
