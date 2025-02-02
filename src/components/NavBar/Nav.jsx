import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import img from "../NavBar/logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`p-4 bg-[#FFFFFF] text-neutral-900  flex border-b-2 border-neutral-200 justify-between items-center ${
        darkMode ? "bg-neutral-900 text-neutral-300" : "bg-[#FFFFFF]"
      }`}>
          
              <img src={img} className="object-cover rounded-full w-12 h-12" alt="Logo"/>
      

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`md:flex space-x-10 absolute md:static  top-16 left-0 w-full bg-[#FFFFFF] md:w-auto md:bg-transparent p-4 md:p-0 transition-all ${
          isOpen ? "flex justify-around pb-40 h-screen flex-col" : "hidden"
        }`}>
        <Link to="/discover" className="block ml-10 md:inline">
          Discover
        </Link>
        <Link to="/innovate" className="block md:inline">
          Innovate
        </Link>
        <Link to="/solution" className="block md:inline">
          Solution
        </Link>
        <Link to="/network" className="block md:inline">
          Network
        </Link>
        <Link to="/community" className="block md:inline">
          Community
        </Link>

        <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <select className="ml-4 bg-neutral-500 border border-none p-1 rounded">
          <option>EN</option>
          <option>ES</option>
          <option>FR</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
