 
import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reservation from "./pages/Reservation";
import MyReservations from "./pages/MyReservations";

import AdminDashboard from "./pages/AdminDashboard";
import AdminReservations from "./pages/AdminReservations";
import AdminUsers from "./pages/AdminUsers";
import AdminSeats from "./pages/AdminSeats";
import AdminSettings from "./pages/AdminSettings";

import Footer from "./components/Footer";

import "./style/global.css";

function AppContent() {
  const location = useLocation();

  const [userRole, setUserRole] = useState(null);

  const handleAdminLogin = () => {
    setUserRole("admin");
  };

  const handleAdminLogout = () => {
    setUserRole(null);
  };

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/admin");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login onAdminLogin={handleAdminLogin} />}
        />

        <Route path="/register" element={<Register />} />

        <Route path="/reservation" element={<Reservation />} />

        <Route
          path="/my-reservations"
          element={<MyReservations />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            userRole === "admin" ? (
              <AdminDashboard onLogout={handleAdminLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/reservations"
          element={
            userRole === "admin" ? (
              <AdminReservations />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/users"
          element={
            userRole === "admin" ? (
              <AdminUsers />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/seats"
          element={
            userRole === "admin" ? (
              <AdminSeats />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/admin/settings"
          element={
            userRole === "admin" ? (
              <AdminSettings />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
