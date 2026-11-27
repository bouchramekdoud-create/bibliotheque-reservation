import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../style/AdminSeats.css";

function AdminSeats() {
  const [seats, setSeats] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      number: `A${String(index + 1).padStart(2, "0")}`,
      status: [3, 7, 12, 15].includes(index + 1)
        ? "Unavailable"
        : "Available",
    }))
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const availableCount = seats.filter(
    (seat) => seat.status === "Available"
  ).length;

  const unavailableCount = seats.length - availableCount;

  const filteredSeats = seats.filter((seat) => {
    const matchesSearch = seat.number
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || seat.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const toggleStatus = (id) => {
    setSeats((previousSeats) =>
      previousSeats.map((seat) =>
        seat.id === id
          ? {
              ...seat,
              status:
                seat.status === "Available" ? "Unavailable" : "Available",
            }
          : seat
      )
    );
  };

  const addSeat = () => {
    const nextId = seats.length
      ? Math.max(...seats.map((seat) => seat.id)) + 1
      : 1;

    const newSeat = {
      id: nextId,
      number: `A${String(nextId).padStart(2, "0")}`,
      status: "Available",
    };

    setSeats((previousSeats) => [...previousSeats, newSeat]);
  };

  const deleteSeat = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this seat?");

    if (confirmed) {
      setSeats((previousSeats) =>
        previousSeats.filter((seat) => seat.id !== id)
      );
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <header className="seats-header">
          <div>
            <h1>Seats Management</h1>
            <p>Manage and monitor all library seats.</p>
          </div>

          <div className="admin-profile">
            <span>👤</span>
            <div>
              <strong>Administrator</strong>
              <small>Admin</small>
            </div>
          </div>
        </header>

        <section className="seats-stats">
          <div className="seat-stat-card">
            <span>💺</span>
            <div>
              <h3>{seats.length}</h3>
              <p>Total Seats</p>
            </div>
          </div>

          <div className="seat-stat-card">
            <span>✅</span>
            <div>
              <h3>{availableCount}</h3>
              <p>Available Seats</p>
            </div>
          </div>

          <div className="seat-stat-card">
            <span>🔒</span>
            <div>
              <h3>{unavailableCount}</h3>
              <p>Unavailable Seats</p>
            </div>
          </div>
        </section>

        <section className="seats-management-card">
          <div className="seats-title">
            <div>
              <h2>All Library Seats</h2>
              <p>View and manage your library seats.</p>
            </div>

            <button className="add-seat-btn" onClick={addSeat}>
              + Add Seat
            </button>
          </div>

          <div className="seats-controls">
            <div className="seats-search">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search by seat number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="seat-filter"
            >
              <option value="All">All Seats</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="seats-grid-admin">
            {filteredSeats.length > 0 ? (
              filteredSeats.map((seat) => (
                <div
                  key={seat.id}
                  className={`admin-seat-card ${seat.status.toLowerCase()}`}
                >
                  <span className="admin-seat-icon">💺</span>
                  <h3>{seat.number}</h3>

                  <span className="admin-seat-status">
                    {seat.status}
                  </span>

                  <div className="seat-actions">
                    <button
                      className="toggle-seat-btn"
                      onClick={() => toggleStatus(seat.id)}
                    >
                      {seat.status === "Available" ? "Disable" : "Enable"}
                    </button>

                    <button
                      className="delete-seat-btn"
                      onClick={() => deleteSeat(seat.id)}
                      aria-label={`Delete seat ${seat.number}`}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-seats">No seats found.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminSeats;