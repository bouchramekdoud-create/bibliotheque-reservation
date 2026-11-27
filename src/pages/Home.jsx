import React from "react";
import Navbar from "../components/Navbar";
import "../style/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>

      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <h1>
            Find Your Perfect
            <span> Study Space</span>
          </h1>

          <p>
            Welcome to SmartLibrary!
            Book your favorite place in the library
            easily and enjoy a comfortable study environment.
          </p>

        <Link to="/login" className="reserve-btn">
  Book Your Seat
</Link>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            alt="Library"
          />
        </div>

      </section>

      <section className="features">

        <h2>Why Choose SmartLibrary?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>Reserve your seat in just a few clicks.</p>
          </div>

          <div className="feature-card">
            <h3>Save Time</h3>
            <p>Check available seats before arriving.</p>
          </div>

          <div className="feature-card">
            <h3>Study Comfortably</h3>
            <p>Find the perfect place for your studies.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;