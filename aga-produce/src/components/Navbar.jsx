import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo/logo-transparency.png'
import fruit from '../assets/logo/fruit-bowl.png'
import character from '../assets/logo/aga_c.png'
import DehazeIcon from '@mui/icons-material/Dehaze'
import InstagramIcon from '@mui/icons-material/Instagram'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isResizing, setIsResizing] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        let resizeTimer
        const handleResize = () => {
            setIsResizing(true)
            clearTimeout(resizeTimer)
            if (window.innerWidth > 768) {
                setMenuOpen(false)
            }
            resizeTimer = setTimeout(() => setIsResizing(false), 200)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(resizeTimer)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            setScrolled(prev => {
                if (!prev && y > 90) return true
                if (prev && y < 40) return false
                return prev
            })
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClass = [
        isResizing ? 'resizing' : '',
        scrolled ? 'nav-scrolled' : '',
    ].filter(Boolean).join(' ')

    const linkClass = ({ isActive }) =>
        `hvr-underline-from-center${isActive ? ' active' : ''}`

    return (
        <nav id='navbar' className={navClass}>
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
                <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
                <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>Products</NavLink>
                <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </div>

            <div className='nav-right'>
                <img
                    id='nav-character'
                    src={character}
                    alt="AGA Mascot"
                />
                <a
                    href="https://www.instagram.com/aga_producecompanyinc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='nav-instagram'
                    aria-label="Follow us on Instagram"
                >
                    <InstagramIcon />
                </a>
            </div>

            <img id='fruitbowl2' src={fruit} alt="Fruit-bowl" />
        </nav>
    )
}

export default Navbar