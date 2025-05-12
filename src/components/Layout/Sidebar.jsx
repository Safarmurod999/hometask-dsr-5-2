"use client";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaUserGroup } from "react-icons/fa6";

const adminRoutes = [
  {
    id: 0,
    name: "Users",
    path: "/admin",
    icon: <FaUserGroup />,
  }
];

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = useState(pathname || 0);
  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);
  return (
    <aside
      className={`sidebar
      // ${toggleSidebar ? "toggle-sidebar" : ""}
      `}
    >
      <div className="relative">
        <div className="sidebar__logo">
          <Link aria-label="logo" to="/" className="text-white">
            Users list
          </Link>
        </div>

      </div>

      <div className="nav">
        {adminRoutes.map((item) => {
          return (
            <Link
              aria-label="sidebar-link"
              key={item.id}
              className={`nav-item ${activeRoute === item.path ? "active" : ""
                }`}
              to={item.path}
              onClick={() => setActiveRoute(item.path)}
            >
              <span className="icon">{item.icon}</span>
              <span className="nav-item-name">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
