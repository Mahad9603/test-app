import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-[#08723e] px-[10%] py-4">
        <div className="flex space-x-3 text-xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#0e0f0f]" : "")}
            to={"/"}
          >
            SignUp
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#0e0f0f]" : "")}
            to={"login"}
          >
            SignIn
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
