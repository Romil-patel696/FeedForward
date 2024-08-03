import React from 'react'
import './Hero.css'
const Hero = ({hero}) => {
    return (
        <header className={hero}>
        <section >
        <div className="hero-content">
            <div className='text-content'>
          <h1>Welcome to FeedForward</h1>
          <p>Connecting excess food with those in need.</p>
          </div>
          <p className="tagline">Reduce waste, feed the hungry, and make a difference.</p>
        </div>
      </section>
        </header>
    )
}

Hero.defaultProps = {
    hero :"defaulHero"
}

export default Hero;



