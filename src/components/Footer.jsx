import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Library<span>Space</span></h2>
          <p>
            Your perfect space to study, focus and achieve more.
            Book your seat and enjoy a comfortable study experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/reservation">Reservation</a>
          <a href="/my-reservations">My Reservations</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: libraryspace@gmail.com</p>
          <p>Location: Ensticp Ocalyptus</p>
          <p>Available: Tous jours de 7:00 - 00:00 </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 LibrarySpace. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;