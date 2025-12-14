import React from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="px-4 md:px-10 py-2 flex items-center justify-between max-w-[1280px] mx-auto w-full">
        <img src={logo} alt="logo" className="h-9 rounded-md" />
        <div className="hidden md:flex items-center gap-8">
          <NavLink to={"/"}
            className={({ isActive }) =>
    isActive
      ? "text-accent font-medium"
      : "dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
  }
          >
            Home
          </NavLink>
          <NavLink to={"/about"}
            className={({ isActive }) =>
    isActive
      ? "text-accent font-medium"
      : "dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
  }
          >
            About Us
          </NavLink>
          <NavLink to={"/services"}
            className={({ isActive }) =>
    isActive
      ? "text-accent font-medium"
      : "dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
  }
          >
            Our Services
          </NavLink>
          <NavLink to={"/portfolio"}
            className={({ isActive }) =>
    isActive
      ? "text-accent font-medium"
      : "dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
  }
          >
            Our Work
          </NavLink>
          <NavLink to={"/contact"}
            className={({ isActive }) =>
    isActive
      ? "text-accent font-medium"
      : "dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
  }
          >
            Contact Us
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-accent hover:bg-accent-hover transition-colors text-white text-sm font-bold tracking-wide shadow-md shadow-accent/20">
            <span>Get a Quote</span>
          </button>
          <button className="md:hidden text-slate-900 dark:text-white">
            <IoMdMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
