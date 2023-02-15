import '../../Styles/Header.css'
// import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <img src="" alt="Logo Kasa"></img>
            <nav>
                {/* <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link> */}
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
