import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";

// TEMP user logic — replace with context later
const user = null;
const logOut = () => console.log("Logged out");

const Navbar = () => {
  const handleLogOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-900 font-semibold border-b-2 border-yellow-900 pb-1"
              : "text-gray-700 hover:text-yellow-800 pb-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-artifacts"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-900 font-semibold border-b-2 border-yellow-900 pb-1"
              : "text-gray-700 hover:text-yellow-800 pb-1"
          }
        >
          All Artifacts
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/add-artifact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-900 font-semibold border-b-2 border-yellow-900 pb-1"
                : "text-gray-700 hover:text-yellow-800 pb-1"
            }
          >
            Add Artifact
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/*  Left Section: Logo + Hamburger */}
      <div className="navbar-start">
        {/* 🍔 Hamburger menu (mobile) */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            <div className="divider my-2" />
            {!user ? (
              <>
                <li>
                  <Link to="/login" className="btn bg-yellow-800 text-white text-center">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="btn bg-yellow-800 text-white text-center">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogOut} className="btn bg-yellow-800 text-white text-center">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl text-yellow-900">
          ArtifactVault
        </Link>
      </div>

      {/*Center Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>

      {/* 👤 Right Side: Auth Area */}
      <div className="navbar-end space-x-2 pr-4">
        {/* 👤 User Avatar Always Shown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL || userIcon} alt="User" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-56"
          >
            <li className="text-center font-semibold">
              {user?.displayName || "Guest"}
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/my-artifacts">My Artifacts</Link>
                </li>
                <li>
                  <Link to="/liked-artifacts">Liked Artifacts</Link>
                </li>
                <li>
                  <button onClick={handleLogOut} className="btn bg-yellow-800 text-white btn-sm mt-2 text-center">
                    Logout
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </div>

        {/* Auth Buttons (Desktop only, if not logged in) */}
        {!user && (
          <>
            <Link to="/login" className="btn bg-yellow-800 text-white hidden sm:inline-flex items-center justify-center">
              Login
            </Link>
            <Link to="/register" className="btn bg-yellow-800 text-white hidden sm:inline-flex items-center justify-center">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
