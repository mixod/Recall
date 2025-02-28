import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-gray-100 shadow shadow-gray-200">
      <ul className="flex justify-center gap-10 max-w-6xl mx-auto p-4">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
