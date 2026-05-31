import { useState, useRef, useEffect } from 'react'
import './Products.css'
import ourProduce from '../assets/logo/our_produce.jpg'

function Products() {
    const [heroLoaded, setHeroLoaded] = useState(false)
    const heroRef = useRef(null)

    useEffect(() => {
        if (heroRef.current && heroRef.current.complete) {
            setHeroLoaded(true)
        }
    }, [])

    return (
        <div className="products">
            <section className="products-hero">
                <div className="products-hero-bg">
                    <img
                        ref={heroRef}
                        src={ourProduce}
                        alt="Fresh produce"
                        className={`products-hero-img fade-img ${heroLoaded ? 'is-loaded' : ''}`}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        onLoad={() => setHeroLoaded(true)}
                    />
                </div>
                <div className="products-hero-overlay">
                    <h1 className="products-hero-title">Our Products</h1>
                    <p className="products-hero-sub">
                        Fresh produce, usually in stock. Contact us for current availability.
                    </p>
                </div>
            </section>

            <section className="products-body">
            </section>
        </div>
    )
}

export default Products