import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../style/AdminDashboard.css";

 function AdminDashboard({ onLogout }) {
  const statistics = [
    {
      title: "Total Reservations",
      value: "248",
      icon: "📅",
      description: "All reservations",
    },
    {
      title: "Active Reservations",
      value: "36",
      icon: "📌",
      description: "Currently active",
    },
    {
      title: "Total Users",
      value: "125",
      icon: "👥",
      description: "Registered students",
    },
    {
      title: "Available Seats",
      value: "64",
      icon: "💺",
      description: "Seats currently free",
    },
  ];

  const reservations = [
    {
      id: "#001",
      student: "Sara Benali",
      seat: "A03",
      date: "27 Nov 2026",
      time: "08:00 - 10:00",
      status: "Confirmed",
    },
    {
      id: "#002",
      student: "Amine Karim",
      seat: "B05",
      date: "27 Nov 2026",
      time: "10:00 - 12:00",
      status: "Confirmed",
    },
    {
      id: "#003",
      student: "Lina Ahmed",
      seat: "C02",
      date: "27 Nov 2026",
      time: "14:00 - 16:00",
      status: "Pending",
    },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Admin!</p>
          </div>

      
      <div className="admin-profile">
  <span>👤</span>

  <div>
    <strong>Administrator</strong>
    <small>Admin</small>
  </div>

  <button className="logout-btn" onClick={onLogout}>
    Logout ↪
  </button>
</div>
        </header>

        <section className="admin-welcome">
          <div>
            <h2>Welcome to SmartLibrary Admin</h2>
            <p>
              Manage reservations, users and library seats from one place.
            </p>
          </div>
          <span>📚</span>
        </section>

        <section className="statistics-grid">
          {statistics.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-top">
                <span className="stat-icon">{stat.icon}</span>
              </div>

              <h3>{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
              <small>{stat.description}</small>
            </div>
          ))}
        </section>

        <section className="reservations-section">
          <div className="section-title">
            <div>
              <h2>Recent Reservations</h2>
              <p>Latest reservations made by students</p>
            </div>

            <button className="view-all-btn">View All</button>
          </div>

          <div className="table-container">
            <table className="admin-table">
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
                {reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>{reservation.student}</td>
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
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;