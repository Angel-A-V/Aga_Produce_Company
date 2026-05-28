import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo/logo-transparency.png'
import fruit from '../assets/logo/fruit-bowl.png'
import DehazeIcon from '@mui/icons-material/Dehaze'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isResizing, setIsResizing] = useState(false)

    useEffect(() => {
        let resizeTimer
        const handleResize = () => {
            setIsResizing(true)
            clearTimeout(resizeTimer)
            
            if (window.innerWidth > 768) {
                setMenuOpen(false)
            }
            
            // Re-enable transitions 200ms after resize stops
            resizeTimer = setTimeout(() => setIsResizing(false), 200)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(resizeTimer)
        }
    }, [])

    return (
        <nav id='navbar' className={isResizing ? 'resizing' : ''}>
            <img id='fruitbowl1' src={fruit} alt="Fruit-bowl" />
            <div className='nav-left'>
                <Link to="/">
                    <img id='logo' src={logo} alt="Aga Produce Logo" />
                </Link>
            </div>
            <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                <DehazeIcon />
            </button>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className="hvr-underline-from-center" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" className="hvr-underline-from-center" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/products" className="hvr-underline-from-center" onClick={() => setMenuOpen(false)}>Products</Link>
                <Link to="/contact" className="hvr-underline-from-center" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
            <div className='nav-right'></div>
            <img id='fruitbowl2' src={fruit} alt="Fruit-bowl" />
        </nav>
    )
}

export default Navbar