import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return(
        // Router wraps everything so any component can use navigation hooks
        <Router>
            {/* Navbar sits outside Routes so it renders on every page */}
            <Navbar />  
            <main className="page-content">
                {/* Routes renders only the one Route whose path matches the URL */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App