import React from "react";
import "../style/SeatCard.css";

function SeatCard({ number, status, selected, onSelect }) {
  return (
    <button
      className={`seat-card ${status} ${selected ? "selected-seat" : ""}`}
      disabled={status === "unavailable"}
      onClick={() => onSelect(number)}
    >
      <span className="seat-icon">💺</span>
      <span className="seat-number">{number}</span>
      {selected && <span className="seat-check">✓</span>}
    </button>
  );
}

export default SeatCard;