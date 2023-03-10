import '../../Styles/Header.css'
import logo from '../../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export default function Header() {
    useEffect(() => {
        document.title = 'Kasa'
        const favicon = document.querySelector("link[rel='icon']")
        favicon.href = './logo.svg'
    }, [])
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <ul>
                    <NavLink exact to="/" className="navLink">
                        Accueil
                    </NavLink>
                    <NavLink exact to="/about" className="navLink">
                        A propos
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}
