import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../style/AdminUsers.css";

function AdminUsers() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const users = [
    {
      id: "#U001",
      name: "Sara Benali",
      email: "sara@gmail.com",
      role: "Student",
      date: "20 Nov 2026",
      status: "Active",
    },
    {
      id: "#U002",
      name: "Amine Karim",
      email: "amine@gmail.com",
      role: "Student",
      date: "21 Nov 2026",
      status: "Active",
    },
    {
      id: "#U003",
      name: "Lina Ahmed",
      email: "lina@gmail.com",
      role: "Student",
      date: "22 Nov 2026",
      status: "Inactive",
    },
    {
      id: "#U004",
      name: "Yacine Mourad",
      email: "yacine@gmail.com",
      role: "Student",
      date: "23 Nov 2026",
      status: "Active",
    },
    {
      id: "#U005",
      name: "Admin SmartLibrary",
      email: "admin@smartlibrary.com",
      role: "Admin",
      date: "18 Nov 2026",
      status: "Active",
    },
    {
      id: "#U006",
      name: "Meriem Ali",
      email: "meriem@gmail.com",
      role: "Student",
      date: "25 Nov 2026",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const activeUsers = users.filter((user) => user.status === "Active").length;
  const students = users.filter((user) => user.role === "Student").length;
  const admins = users.filter((user) => user.role === "Admin").length;

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <header className="users-header">
          <div>
            <h1>Users Management</h1>
            <p>Manage and monitor all registered users.</p>
          </div>

          <div className="admin-profile">
            <span>👤</span>
            <div>
              <strong>Administrator</strong>
              <small>Admin</small>
            </div>
          </div>
        </header>

        <section className="users-stats">
          <div className="user-stat-card">
            <span>👥</span>
            <div>
              <h3>{users.length}</h3>
              <p>Total Users</p>
            </div>
          </div>

          <div className="user-stat-card">
            <span>🎓</span>
            <div>
              <h3>{students}</h3>
              <p>Students</p>
            </div>
          </div>

          <div className="user-stat-card">
            <span>🛡️</span>
            <div>
              <h3>{admins}</h3>
              <p>Administrators</p>
            </div>
          </div>

          <div className="user-stat-card">
            <span>✅</span>
            <div>
              <h3>{activeUsers}</h3>
              <p>Active Users</p>
            </div>
          </div>
        </section>

        <section className="users-management-card">
          <div className="users-title">
            <div>
              <h2>All Users</h2>
              <p>View and search registered users.</p>
            </div>

            <span className="users-count">
              {filteredUsers.length} users
            </span>
          </div>

          <div className="users-controls">
            <div className="users-search">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search by name, email or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="role-filter"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="table-container">
            <table className="admin-table users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Registration Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>

                      <td>
                        <div className="user-info">
                          <strong>{user.name}</strong>
                          <small>{user.email}</small>
                        </div>
                      </td>

                      <td>
                        <span className={`role-badge ${user.role.toLowerCase()}`}>
                          {user.role}
                        </span>
                      </td>

                      <td>{user.date}</td>

                      <td>
                        <span className={`user-status ${user.status.toLowerCase()}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-users">
                      No users found.
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

export default AdminUsers;