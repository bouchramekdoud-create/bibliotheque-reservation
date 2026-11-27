import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/AdminSidebar.css";

function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <span>📚</span>
        <h2>SmartLibrary</h2>
      </div>

      <p className="sidebar-label">MENU PRINCIPAL</p>

      <nav className="admin-nav">
        <Link
          to="/admin"
          className={location.pathname === "/admin" ? "active" : ""}
        >
          <span>📊</span> Dashboard
        </Link>

        <Link
  to="/admin/reservations"
  className={location.pathname === "/admin/reservations" ? "active" : ""}
>
  <span>📅</span> Reservations
</Link>

    <Link
  to="/admin/users"
  className={location.pathname === "/admin/users" ? "active" : ""}
>
  <span>👥</span> Users
</Link>

        <Link
  to="/admin/seats"
  className={location.pathname === "/admin/seats" ? "active" : ""}
>
  <span>💺</span> Seats
</Link>

        <Link to="/admin/settings">
  Settings
</Link>
      </nav>

      <div className="admin-sidebar-bottom">
        <Link to="/">
          <span>↩️</span> Back to website
        </Link>
      </div>
    </aside>
  );
}

export default AdminSidebar;