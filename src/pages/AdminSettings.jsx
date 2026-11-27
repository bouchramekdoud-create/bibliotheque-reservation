import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../style/AdminSettings.css";

function AdminSettings() {
  const [library, setLibrary] = useState({
    name: "SmartLibrary",
    email: "library@university.com",
    opening: "08:00",
    closing: "18:00",
    capacity: 100,
  });

  const [admin, setAdmin] = useState({
    name: "Admin",
    email: "admin@smartlibrary.com",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [notifications, setNotifications] = useState(true);
  const [maintenance, setMaintenance] = useState(false);
  const [message, setMessage] = useState("");

  const handleLibraryChange = (e) => {
    setLibrary({ ...library, [e.target.name]: e.target.value });
  };

  const handleAdminChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const saveSettings = (e) => {
    e.preventDefault();
    setMessage("Settings updated successfully!");
  };

  const changePassword = (e) => {
    e.preventDefault();

    if (password.new !== password.confirm) {
      setMessage("New passwords do not match!");
      return;
    }

    if (!password.current || !password.new) {
      setMessage("Please complete all password fields.");
      return;
    }

    setMessage("Password form validated successfully!");
    setPassword({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main settings-main">
        <div className="settings-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your library and administrator settings.</p>
          </div>
        </div>

        {message && (
          <div className="settings-message">
            {message}
            <button onClick={() => setMessage("")}>×</button>
          </div>
        )}

        <form onSubmit={saveSettings}>
          <section className="settings-card">
            <div className="settings-card-title">
              <h2>📚 Library Information</h2>
              <p>Update the library information.</p>
            </div>

            <div className="settings-grid">
              <div className="settings-field">
                <label>Library Name</label>
                <input
                  name="name"
                  value={library.name}
                  onChange={handleLibraryChange}
                />
              </div>

              <div className="settings-field">
                <label>Library Email</label>
                <input
                  type="email"
                  name="email"
                  value={library.email}
                  onChange={handleLibraryChange}
                />
              </div>

              <div className="settings-field">
                <label>Opening Time</label>
                <input
                  type="time"
                  name="opening"
                  value={library.opening}
                  onChange={handleLibraryChange}
                />
              </div>

              <div className="settings-field">
                <label>Closing Time</label>
                <input
                  type="time"
                  name="closing"
                  value={library.closing}
                  onChange={handleLibraryChange}
                />
              </div>

              <div className="settings-field">
                <label>Library Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  min="1"
                  value={library.capacity}
                  onChange={handleLibraryChange}
                />
              </div>
            </div>
          </section>

          <section className="settings-card">
            <div className="settings-card-title">
              <h2>👤 Administrator Profile</h2>
              <p>Manage your personal information.</p>
            </div>

            <div className="settings-grid">
              <div className="settings-field">
                <label>Full Name</label>
                <input
                  name="name"
                  value={admin.name}
                  onChange={handleAdminChange}
                />
              </div>

              <div className="settings-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={admin.email}
                  onChange={handleAdminChange}
                />
              </div>
            </div>
          </section>

          <div className="settings-save">
            <button type="submit">Save Changes</button>
          </div>
        </form>

        <section className="settings-card">
          <div className="settings-card-title">
            <h2>🔒 Change Password</h2>
            <p>Update your administrator password.</p>
          </div>

          <form onSubmit={changePassword}>
            <div className="settings-grid">
              <div className="settings-field">
                <label>Current Password</label>
                <input
                  type="password"
                  name="current"
                  value={password.current}
                  onChange={handlePasswordChange}
                  placeholder="Enter current password"
                />
              </div>

              <div className="settings-field">
                <label>New Password</label>
                <input
                  type="password"
                  name="new"
                  value={password.new}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                />
              </div>

              <div className="settings-field">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirm"
                  value={password.confirm}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="settings-save">
              <button type="submit">Update Password</button>
            </div>
          </form>
        </section>

        <section className="settings-card">
          <div className="settings-card-title">
            <h2>⚙️ General Preferences</h2>
            <p>Control your application preferences.</p>
          </div>

          <div className="settings-toggle">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive notifications about reservations.</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="settings-toggle">
            <div>
              <h3>Maintenance Mode</h3>
              <p>Temporarily disable access to the website.</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={maintenance}
                onChange={() => setMaintenance(!maintenance)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminSettings;