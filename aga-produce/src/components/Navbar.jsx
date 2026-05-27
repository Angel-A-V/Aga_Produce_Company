// Link from react-router-dom navigates without a full page reload
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/logo/logo-transparency.png'

function Navbar() {
    return(
        <nav id='navbar'>
            <div className='nav-left'>
                <Link to="/">
                    <img id='logo' src={logo} alt="Aga Produce Logo" />
                </Link>
            </div>
            {/* Each Link's "to" prop matches a Route path defined in App.jsx */}
            <div className='nav-links'>
                <Link to="/" className="hvr-underline-from-center">Home</Link>
                <Link to="/about" className="hvr-underline-from-center">About</Link>
                <Link to="/contact" className="hvr-underline-from-center">Contact</Link>
            </div>
            <div className='nav-right'></div>
        </nav>
    )
}

export default Navbar