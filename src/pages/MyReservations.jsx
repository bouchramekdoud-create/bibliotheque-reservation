import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/MyReservations.css";

function MyReservations() {
  // Temporary data for frontend design.
  // Later, this will be replaced with data from the Backend API.
  const reservations = [];

  return (
    <>
      <Navbar />

      <div className="my-reservations-page">

        <div className="my-reservations-header">
          <span className="my-reservations-badge">
            📚 SmartLibrary
          </span>

          <h1>My Reservations</h1>

          <p>
            Manage your bookings and keep track of your study sessions.
          </p>
        </div>

        <div className="my-reservations-container">

          <div className="reservations-title">
            <div>
              <h2>Your Bookings</h2>
              <p>View and manage your library reservations.</p>
            </div>

            <Link to="/reservation" className="new-reservation-btn">
              + New Reservation
            </Link>
          </div>

          {reservations.length === 0 ? (

            <div className="empty-reservations">
              <div className="empty-icon">📅</div>

              <h2>No Reservations Yet</h2>

              <p>
                You haven't booked a study space yet.
                Start by choosing your preferred date and seat.
              </p>

              <Link to="/reservation" className="book-now-btn">
                Book Your Seat →
              </Link>
            </div>

          ) : (

            <div className="reservations-list">
              {reservations.map((reservation) => (
                <div className="reservation-item" key={reservation.id}>

                  <div className="reservation-icon">💺</div>

                  <div className="reservation-info">
                    <h3>Study Space Reservation</h3>
                    <p>📅 {reservation.date}</p>
                    <p>🕒 {reservation.time}</p>
                    <p>💺 Seat {reservation.seat}</p>
                  </div>

                  <span className="reservation-status">
                    {reservation.status}
                  </span>

                </div>
              ))}
            </div>

          )}

        </div>
      </div>
    </>
  );
}

export default MyReservations;