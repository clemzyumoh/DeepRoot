import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Strikethrough,
  HeartHandshake,
  LucideShieldPlus,
  CalendarCheck,
  Handshake,
  Component,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronRight,
  ChevronDown,
  Users,
  Briefcase,
  Code,
  Network,
  Blocks,
  Lock,
  Workflow,
  Cpu,
  ListRestart,
  BookCheck,
} from "lucide-react";
import img from "../NavBar/logo.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);


  const Menus = [
    {
      name: "Discover",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Overview",
          desc: "Overview Description",
          icon: <Users size={16} />,
        },
        {
          name: "Treands",
          desc: "Treads Description",
          icon: <Briefcase size={16} />,
        },
        {
          name: "Insight",
          desc: "Insights Description",
          icon: <Briefcase size={16} />,
        },
      ],
    },
    {
      name: "Innovate",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Tech",
          desc: "Overview Description",
          icon: <Cpu size={16} />,
        },
        {
          name: "Startups",
          desc: "Treads Description",
          icon: <ListRestart size={16} />,
        },
        {
          name: "Research",
          desc: "Insights Description",
          icon: <BookCheck size={16} />,
        },
      ],
    },
    {
      name: "Solution",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Development",
          desc: "Overview Description",
          icon: <Blocks size={16} />,
        },
        {
          name: "Security",
          desc: "Treads Description",
          icon: <Lock size={16} />,
        },
        {
          name: "Integration",
          desc: "Insights Description",
          icon: <Workflow size={16} />,
        },
      ],
    },
    {
      name: "Network",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Event",
          desc: "Overview Description",
          icon: <CalendarCheck size={16} />,
        },
        {
          name: "Meetups",
          desc: "Treads Description",
          icon: <Component size={16} />,
        },
        {
          name: "Partners",
          desc: "Insights Description",
          icon: <Handshake size={16} />,
        },
      ],
    },
    {
      name: "Community",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Forum",
          desc: "Overview Description",
          icon: <Strikethrough size={16} />,
        },
        {
          name: "Support",
          desc: "Treads Description",
          icon: <HeartHandshake size={16} />,
        },
        {
          name: "Resoures",
          desc: "Insights Description",
          icon: <LucideShieldPlus size={16} />,
        },
      ],
    },
  ];
  const navLinks = [
    {
      name: "Discover",
      icon: <Users size={16} />,
      subMenu: ["Overview", "Trends", "Insights"],
    },
    {
      name: "Innovate",
      icon: <Briefcase size={16} />,
      subMenu: ["Tech", "Startups", "Research"],
    },
    {
      name: "Solution",
      icon: <Code size={16} />,
      subMenu: ["Development", "Security", "Integration"],
    },
    {
      name: "Network",
      icon: <Network size={16} />,
      subMenu: ["Events", "Meetups", "Partners"],
    },
    {
      name: "Community",
      icon: <Users size={16} />,
      subMenu: ["Forum", "Support", "Resources"],
    },
  ];
  const toggleHoverMenu = (state) => {
    setIsHover(state);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      // <-- Change "exist" to "exit"
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
    },
  };



  return (
    <motion.nav
      className={`flex justify-between items-center  z-50 fixed w-full  p-4 border-b-0 border-neutral-200 ${
        darkMode
          ? "bg-[#1c1d20] text-neutral-300"
          : "bg-neutral-300 text-neutral-900"
      }`}>
      {/* Logo & Nav Links */}
      <div className="flex items-center space-x-5">
        <img src={img} className="rounded-full min-w-16 h-16" alt="Logo" />

        {/* Navbar Links (Desktop) */}
        <div className="hidden  space-x-6">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}>
              <button className="flex items-center gap-2 px-4 py-2 rounded hover:duration-1000 hover:delay-1000 hover:ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
                {item.icon}
                {item.name}
                <ChevronDown size={14} />
              </button>

              {/* Dropdown */}
              {dropdownOpen === index && (
                <div
                  //className=" absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 shadow-lg rounded opacity-0 transition-opacity duration-300 ease-in-out"
                  className={`absolute  left-0 mt-2 w-48 bg-white/5   dark:bg-neutral-800 shadow-lg rounded hover:delay-1000 transition-all ease-in-out 
                    ${
                      dropdownOpen === index
                        ? "delay-1000  duration-1000 transition-all visible"
                        : "opacity-0 delay-1000 translate-y-[-10px] invisible"
                    }`}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative group"
                      onMouseEnter={() => setNestedDropdownOpen(subIndex)}
                      onMouseLeave={() => setNestedDropdownOpen(null)}>
                      <button className="flex items-center justify-between w-full text-left px-4 py-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all">
                        {subItem}
                        <ChevronRight size={14} />
                      </button>

                      {/* Nested Dropdown */}
                      {nestedDropdownOpen === subIndex && (
                        <div className="absolute left-full top-0 mt-0 w-40 bg-white dark:bg-neutral-800 shadow-lg rounded">
                          {["Option A", "Option B", "Option C"].map(
                            (nested, j) => (
                              <Link
                                key={j}
                                to={`/${subItem.toLowerCase()}/${nested.toLowerCase()}`}
                                className="block px-4 py-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all">
                                {nested}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <motion.div>
          <motion.ul className="lg:flex justify-center ml-20 hidden items-center">
            {Menus.map((menu, index) => {
              const hasMenu = menu?.subMenu?.length > 0;
              return (
                <motion.li
                  key={index}
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                  onHoverStart={() => setDropdownOpen(index)}
                  onHoverEnd={() => setDropdownOpen(null)}
                  className="group/link">
                  <span className="flex justify-center items-center gap-2  font-bold font-orbitron text-lg cursor-pointer px-3 py-3 rounded-xl  hover:bg-[#0085A8]">
                    {menu.name}
                    {hasMenu && (
                      <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180  duration-200" />
                    )}
                  </span>
                  {hasMenu && (
                    <motion.div
                      initial="exit"
                      variants={subMenuAnimate}
                      animate={dropdownOpen === index ? "enter" : "exit"}
                      onAnimationComplete={(def) => {
                        if (def === "exit") setDropdownOpen(null);
                      }}
                      className={`absolute top-[5rem] p-[15px] rounded-[6px] flex items-center justify-center w-fit backdrop-blur-md shadow-md transition-opacity duration-700 ease-in-out ${
                        dropdownOpen === index
                          ? "opacity-100 visible pointer-events-auto delay-1000"
                          : "opacity-0 invisible pointer-events-none"
                      } bg-white/10`}>
                      <div className="space-y-2 grid gap-4">
                        {menu?.subMenu?.map((subMenu, index) => (
                          <div
                            key={index}
                            className="relative group cursor-pointer p-2 hover:bg-white/20 rounded-md flex items-center  transition duration-300">
                            <div className="flex items-center mr-5 gap-3">
                              <div className="bg-white/5 p-2 rounded-md text-gray-300 text-lg group-hover:text-gray-900 group-hover:bg-white  duration-300">
                                {subMenu?.icon}
                              </div>
                            </div>
                            <div className=" text-start group-hover:text-neutral-900">
                              <h6 className="font-bold font-sans">
                                {subMenu.name}
                              </h6>
                              <p className="text-sm ">{subMenu.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>

      {/* Right Side (Theme Toggle & Language Selector) */}
      <div className="flex items-center space-x-6">
        {/* Dark Mode Toggle */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setDarkMode(!darkMode)}
          className="w-[24px]">
          {darkMode ? (
            <Sun size={24} className="dark:text-[#0085A8]" />
          ) : (
            <Moon size={24} className="text-[#1F1619]" />
          )}
        </motion.button>

        {/* Language Selector */}
        {/* <div className="relative group">
          <button className="flex items-center px-4 py-2 bg-neutral-300 dark:bg-neutral-700 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all">
            <Globe size={20} className="mr-2" />
            <span className="text-sm font-medium">Language</span>
            <ChevronDown size={14} className="ml-2" />
          </button>
        </div> */}
        {/* Language Selector */}
        <div className="relative group">
          <button className="flex items-center px-2 md:px-4 py-2  bg-neutral-300 border-2 border-[#0085a8] dark:bg-[#0085a8] rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all">
            <Globe size={20} className="mr-2" />
            <span className="text-sm font-medium font-orbitron">Language</span>
            <ChevronDown size={14} className="ml-2" />
          </button>

          <div className="absolute right-0 mt-2 w-52 bg-white  dark:border-none dark:bg-neutral-800 shadow-lg rounded hidden group-hover:block">
            {[
              "English",
              "Spanish",
              "French",
              "German",
              "Chinese",
              "Japanese",
            ].map((lang, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 hover:bg-neutral-300  dark:hover:bg-neutral-700 transition-all">
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden mr-2 " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Start off-screen to the left
            animate={{ x: 0 }} // Slide in to the screen
            exit={{ x: "-100%" }} // Slide back when closed
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:hidden absolute top-24 left-0 w-full h-screen bg-[#0085a8] text-white p-4 space-y-4">
            {navLinks.map((item, index) => (
              <motion.div key={index} className="relative">
                <button
                  className="flex items-center justify-between w-full md:my-10 text-center px-4 py-2 hover:bg-neutral-500 rounded transition-all"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === index ? null : index)
                  }>
                  {item.icon}
                  {item.name}
                  <ChevronDown size={14} />
                </button>

                {mobileDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: mobileDropdown === index ? 1 : 0,
                      height: mobileDropdown === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 mt-2 space-y-2">
                    {item.subMenu.map((subItem, i) => (
                      <button
                        key={i}
                        className="block w-full text-left px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded transition-all">
                        {subItem}
                      </button>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
