import '../../Styles/Footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
    return (
        <footer>
            <div className="footerLogo"><img src={logo} alt="Logo Kasa" /></div>
            <div>© 2023 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer
