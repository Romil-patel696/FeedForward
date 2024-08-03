import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Notify from '../assets/How-to-Sort-Push-Notifications.png'
import Reliabl from '../assets/Refinements-1_0003_Graphic-11-Reliable-Secure-1.png';
import easyImg from '../assets/easytouse2.png'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero hero="defaultHero"></Hero>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img src={easyImg} />
            <h3>Easy to Use</h3>
            <p>Post and claim food with just a few clicks.</p>
          </div>
          <div className="feature">
            <img src={Notify} alt="Feature 2" />
            <h3>Real-Time Notifications</h3>
            <p>Stay updated with the latest food posts.</p>
          </div>
          <div className="feature">
            <img src={Reliabl} alt="Feature 3" />
            <h3>Secure and Reliable</h3>
            <p>Your data is safe with us.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create an account and log in.</p>
          </div>
          <div className="step">
            <h3>2. Post Food</h3>
            <p>PG/Hostel owners post details of excess food.</p>
          </div>
          <div className="step">
            <h3>3. Claim Food</h3>
            <p>People in need or helping groups claim the food.</p>
          </div>
          <div className="step">
            <h3>4. Pickup</h3>
            <p>Food is picked up and delivered to those in need.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"FeedForward has helped our community reduce food waste and feed the hungry."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"An amazing initiative! It's so easy to post and claim food."</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Join Us in Making a Difference</h2>
        <p>Together, we can reduce food waste and feed those in need.</p>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
