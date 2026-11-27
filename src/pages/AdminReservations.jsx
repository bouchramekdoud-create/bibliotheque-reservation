import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../style/AdminReservations.css";

function AdminReservations() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [reservations] = useState([
    {
      id: "#001",
      student: "Sara Benali",
      email: "sara@gmail.com",
      seat: "A03",
      date: "27 Nov 2026",
      time: "08:00 - 10:00",
      status: "Confirmed",
    },
    {
      id: "#002",
      student: "Amine Karim",
      email: "amine@gmail.com",
      seat: "B05",
      date: "27 Nov 2026",
      time: "10:00 - 12:00",
      status: "Confirmed",
    },
    {
      id: "#003",
      student: "Lina Ahmed",
      email: "lina@gmail.com",
      seat: "C02",
      date: "27 Nov 2026",
      time: "14:00 - 16:00",
      status: "Pending",
    },
    {
      id: "#004",
      student: "Yacine Mourad",
      email: "yacine@gmail.com",
      seat: "A07",
      date: "28 Nov 2026",
      time: "08:00 - 10:00",
      status: "Cancelled",
    },
    {
      id: "#005",
      student: "Meriem Ali",
      email: "meriem@gmail.com",
      seat: "B02",
      date: "28 Nov 2026",
      time: "12:00 - 14:00",
      status: "Pending",
    },
    {
      id: "#006",
      student: "Nour Haddad",
      email: "nour@gmail.com",
      seat: "C04",
      date: "29 Nov 2026",
      time: "14:00 - 16:00",
      status: "Confirmed",
    },
  ]);

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.student.toLowerCase().includes(search.toLowerCase()) ||
      reservation.id.toLowerCase().includes(search.toLowerCase()) ||
      reservation.seat.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || reservation.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <header className="reservations-header">
          <div>
            <h1>Reservations Management</h1>
            <p>Manage and monitor all student reservations.</p>
          </div>

          <div className="admin-profile">
            <span>👤</span>
            <div>
              <strong>Administrator</strong>
              <small>Admin</small>
            </div>
          </div>
        </header>

        <section className="reservation-stats">
          <div className="reservation-stat-card">
            <span>📅</span>
            <div>
              <h3>{reservations.length}</h3>
              <p>Total Reservations</p>
            </div>
          </div>

          <div className="reservation-stat-card">
            <span>✅</span>
            <div>
              <h3>
                {reservations.filter((r) => r.status === "Confirmed").length}
              </h3>
              <p>Confirmed</p>
            </div>
          </div>

          <div className="reservation-stat-card">
            <span>⏳</span>
            <div>
              <h3>
                {reservations.filter((r) => r.status === "Pending").length}
              </h3>
              <p>Pending</p>
            </div>
          </div>

          <div className="reservation-stat-card">
            <span>❌</span>
            <div>
              <h3>
                {reservations.filter((r) => r.status === "Cancelled").length}
              </h3>
              <p>Cancelled</p>
            </div>
          </div>
        </section>

        <section className="reservations-management-card">
          <div className="management-title">
            <div>
              <h2>All Reservations</h2>
              <p>View and search student bookings.</p>
            </div>

            <span className="reservation-count">
              {filteredReservations.length} reservations
            </span>
          </div>

          <div className="reservation-controls">
            <div className="reservation-search">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search by student, ID or seat..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="table-container">
            <table className="admin-table reservations-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student</th>
                  <th>Seat</th>
                  <th>Date</th>
                  <th>Time Slot</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredReservations.length > 0 ? (
                  filteredReservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>{reservation.id}</td>

                      <td>
                        <div className="student-info">
                          <strong>{reservation.student}</strong>
                          <small>{reservation.email}</small>
                        </div>
                      </td>

                      <td>{reservation.seat}</td>
                      <td>{reservation.date}</td>
                      <td>{reservation.time}</td>

                      <td>
                        <span
                          className={`status-badge ${reservation.status.toLowerCase()}`}
                        >
                          {reservation.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-reservations">
                      No reservations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminReservations;