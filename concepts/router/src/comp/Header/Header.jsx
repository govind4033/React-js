import { NavLink } from "react-router-dom";
import React from 'react';
import {Home, Contact, About, Services, TermsAndConditions} from '../index.jsx';

function Header() {
  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md">

      {/* Logo / Brand */}
      <h1 className="text-xl font-bold">MyApp</h1>

      {/* Navigation */}
      <nav className="flex gap-6">

        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-300"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-300"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-300"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/TermsAndConditions"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-300"
          }
        >
          Terms & Conditions
        </NavLink>
        <NavLink
          to="/usercomp"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-400 font-semibold"
              : "hover:text-indigo-300"
          }
        >
          User Comp
        </NavLink>

      </nav>
    </header>
  );
}

export default Header;