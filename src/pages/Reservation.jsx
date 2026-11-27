import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SeatCard from "../components/SeatCard";

import "../style/Reservation.css";

function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seat, setSeat] = useState(null);

  const timeSlots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
  ];

  const reservedSeats = [3, 7, 12, 15];

  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleReservation = () => {
    if (!date || !time || !seat) {
      alert("Please select a date, time and seat!");
      return;
    }

    alert(
      `Reservation confirmed!\nDate: ${date}\nTime: ${time}\nSeat: ${seat}`
    );
  };

  return (
    <>
      <Navbar />

      <div className="reservation-page">

        {/* Hero Section */}
        <section className="reservation-hero">
          <div className="hero-content">
            <span className="hero-badge">
              🎓 Find Your Perfect Spot
            </span>

            <h1>Reserve Your Study Space</h1>

            <p>
              Choose your date, time and seat, and enjoy a peaceful
              study environment.
            </p>
          </div>

          <div className="hero-decoration">📚</div>
        </section>

        {/* Main Content */}
        <div className="reservation-container">

          {/* Booking Form */}
          <div className="booking-card">

            {/* Step 1: Date */}
            <div className="booking-section">
              <div className="section-heading">
                <div className="step-number">1</div>

                <div>
                  <h2>Select a Date</h2>
                  <p>When would you like to study?</p>
                </div>
              </div>

              <input
                type="date"
                className="date-input"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Step 2: Time */}
            <div className="booking-section">
              <div className="section-heading">
                <div className="step-number">2</div>

                <div>
                  <h2>Choose Your Time</h2>
                  <p>Select your preferred time slot.</p>
                </div>
              </div>

              <div className="time-grid">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    className={`time-option ${
                      time === slot ? "selected" : ""
                    }`}
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                    {time === slot && <span> ✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Seats */}
            <div className="booking-section">
              <div className="section-heading">
                <div className="step-number">3</div>

                <div>
                  <h2>Select Your Seat</h2>
                  <p>Choose an available seat.</p>
                </div>
              </div>

              <div className="library-label">
                <span></span>
                LIBRARY STUDY AREA
                <span></span>
              </div>

              <div className="seats-grid">
                {seats.map((number) => {
                  const isReserved = reservedSeats.includes(number);

                  return (
                    <SeatCard
                      key={number}
                      number={number}
                      status={isReserved ? "unavailable" : "available"}
                      selected={seat === number}
                      onSelect={setSeat}
                    />
                  );
                })}
              </div>

              {/* Seat Legend */}
              <div className="seat-legend">
                <span>
                  <i className="legend-dot available-dot"></i>
                  Available
                </span>

                <span>
                  <i className="legend-dot selected-dot"></i>
                  Selected
                </span>

                <span>
                  <i className="legend-dot unavailable-dot"></i>
                  Unavailable
                </span>
              </div>
            </div>

          </div>

          {/* Reservation Summary */}
          <div className="summary-card">

            <div className="summary-header">
              <div className="summary-check">✓</div>

              <div>
                <h2>Reservation Summary</h2>
                <p>Review your selection before confirming.</p>
              </div>
            </div>

            <div className="summary-image">
              <div className="summary-image-content">
                <span>📚</span>
                <h3>
                  Study Smart,
                  <br />
                  Live Better
                </h3>
              </div>
            </div>

            <div className="summary-details">

              <div className="summary-row">
                <span>📅 Date</span>
                <strong>{date || "Not selected"}</strong>
              </div>

              <div className="summary-row">
                <span>◷ Time</span>
                <strong>{time || "Not selected"}</strong>
              </div>

              <div className="summary-row">
                <span>💺 Seat</span>
                <strong>
                  {seat ? `Seat ${seat}` : "Not selected"}
                </strong>
              </div>

            </div>

            <button
              type="button"
              className="confirm-btn"
              onClick={handleReservation}
            >
              ✓ Confirm Reservation <span>→</span>
            </button>

            <div className="secure-message">
              🔒 Your study space is secure with SmartLibrary
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Reservation;