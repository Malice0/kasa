import '../../Styles/Header.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/'><img src={logo} alt="Logo Kasa" /></Link>
            <nav>
                <ul>
                <Link to='/' className='navLink'>Accueil</Link>
                <Link to='/about' className='navLink'>A propos</Link>
                </ul>
            </nav>
        </div>
    
    )
}

export default Header
