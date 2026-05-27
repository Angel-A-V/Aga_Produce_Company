import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return(
        // Router wraps everything so any component can use navigation hooks
        <Router>
            {/* Navbar sits outside Routes so it renders on every page */}
            <Navbar />

            {/* Routes renders only the one Route whose path matches the URL */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App