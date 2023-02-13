import '../../Styles/Heaser.css'

function Header() {
    return (
        <div className="header">
            <img src="../assets/logo.svg" alt="Kasa"></img>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
