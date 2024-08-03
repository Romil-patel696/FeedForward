import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import missionImg from "../assets/about.svg";
import userPic from "../assets/customer.svg";
import './AboutPage.css';

function About() {
  return (
    <div className="container about-us">
      <div className="about-row">
        <div className="about-col">
          <img src={missionImg} alt="Our Mission" className="img-fluid" />
        </div>
        <div className="about-col">
          <h1 className="display-4 text-center my-5">About Us</h1>
          <p className="lead text-center">
            Welcome to FeedForward, where we aim to end hunger by connecting
            those with excess food to those in need. Our mission is to promote
            food security, improve nutrition, and support sustainable
            agriculture.
          </p>
          <p className="lead text-center">
            At FeedForward, we believe in the power of community and the
            importance of reducing food waste. By partnering with PGs, hostels,
            hotels, and other food providers, we ensure that surplus food
            reaches those who need it the most.
          </p>
          <div className="text-center">
            <Link
              to="/contact"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h1 className="display-4 mb-4">What Our Users Say</h1>
        <div className="testimonial-row">
          <div className="testimonial-col">
            <div className="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active text-center">
                  <div className="testimonial">
                    <img
                      src={userPic}
                      className="testimonial-img"
                      alt="customer1"
                    />
                    <div className="testimonial-content">
                      <h3 className="font-weight-bolder">John Doe</h3>
                      <p>
                        "FeedForward has helped our community reduce food
                        waste and feed the hungry. The platform is easy to use
                        and the support from the team is fantastic."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="testimonial">
                    <img
                      src={userPic}
                      className="testimonial-img"
                      alt="customer2"
                    />
                    <div className="testimonial-content">
                      <h3 className="font-weight-bolder">Jane Smith</h3>
                      <p>
                        "An amazing initiative! It's so easy to post and claim
                        food. FeedForward is making a real difference in our
                        community."
                      </p>
                    </div>
                  </div>
                </div>
                {/* Add more testimonials here */}
              </div>
              <div className="carousel-controls">
                <button className="carousel-control-prev" data-slide="prev">
                  <span className="carousel-control-prev-icon">‹</span>
                </button>
                <button className="carousel-control-next" data-slide="next">
                  <span className="carousel-control-next-icon">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <h1 className="display-4">Our Team</h1>
      </div>
      <div className="team-row">
        <div className="team-col">
          <div className="card">
            <img
              src={userPic}
              className="card-img-top"
              alt="Director"
            />
            <div className="card-body">
              <h5 className="card-title">Director</h5>
              <div className="card-text">
                CEO <span className="float-right">5 years</span>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-col">
          <div className="card">
            <img
              src={userPic}
              className="card-img-top"
              alt="Manager"
            />
            <div className="card-body">
              <h5 className="card-title">Team Member</h5>
              <div className="card-text">
                Manager <span className="float-right">5 years</span>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-col">
          <div className="card">
            <img
              src={userPic}
              className="card-img-top"
              alt="Manager"
            />
            <div className="card-body">
              <h5 className="card-title">Team Member</h5>
              <div className="card-text">
                Manager <span className="float-right">8 years</span>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
