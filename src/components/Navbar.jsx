import React from "react";
import { NavLink } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

function Navbar() {
  const { stats } = useTaskContext();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ◈ <span>task</span>flow
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          end
        >
          Lista {stats.active > 0 && `(${stats.active})`}
        </NavLink>
        <NavLink
          to="/add-task"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          + Nova
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
