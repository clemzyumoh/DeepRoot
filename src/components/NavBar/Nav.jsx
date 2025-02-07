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
          link: "https://example.com/overview",
        },
        {
          name: "Treads",
          desc: "Treads Description",
          icon: <Briefcase size={16} />,
          link: "https://example.com/trends",
        },
        {
          name: "Insight",
          desc: "Insights Description",
          icon: <Briefcase size={16} />,
          link: "https://example.com/insights",
        },
      ],
    },
    {
      name: "Innovate",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Tech",
          desc: "Tech Description",
          icon: <Cpu size={16} />,
          link: "https://example.com/tech",
        },
        {
          name: "Start-ups",
          desc: "Start-ups Description",
          icon: <ListRestart size={16} />,
          link: "https://example.com/startups",
        },
        {
          name: "Research",
          desc: "Research Description",
          icon: <BookCheck size={16} />,
          link: "https://example.com/research",
        },
      ],
    },
    {
      name: "Solution",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Development",
          desc: "Development Description",
          icon: <Blocks size={16} />,
          link: "https://example.com/development",
        },
        {
          name: "Security",
          desc: "Security Description",
          icon: <Lock size={16} />,
          link: "https://example.com/security",
        },
        {
          name: "Integration",
          desc: "Integration Description",
          icon: <Workflow size={16} />,
          link: "https://example.com/integration",
        },
      ],
    },
    {
      name: "Network",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Event",
          desc: "Event Description",
          icon: <CalendarCheck size={16} />,
          link: "https://example.com/events",
        },
        {
          name: "Meetups",
          desc: "Meetings Description",
          icon: <Component size={16} />,
          link: "https://example.com/meetup",
        },
        {
          name: "Partners",
          desc: "Partners Description",
          icon: <Handshake size={16} />,
          link: "https://example.com/partners",
        },
      ],
    },
    {
      name: "Community",
      subMenuHeading: ["overview", "Treads", "Insights"],
      subMenu: [
        {
          name: "Forum",
          desc: "Forum Description",
          icon: <Strikethrough size={16} />,
          link: "https://example.com/forum",
        },
        {
          name: "Support",
          desc: "Support Description",
          icon: <HeartHandshake size={16} />,
          link: "https://example.com/support",
        },
        {
          name: "Resoures",
          desc: "Resources Description",
          icon: <LucideShieldPlus size={16} />,
          link: "https://example.com/resources",
        },
      ],
    },
  ];
  const navLinks = [
    {
      name: "Discover",
      icon: <Users size={25} />,
      subMenu: ["Overview", "Trends", "Insights"],
      subMenuLinks: [
        "https://example.com/overview",
        "https://example.com/trends",
        "https://example.com/insights",
      ],
    },
    {
      name: "Innovate",
      icon: <Briefcase size={25} />,
      subMenu: ["Tech", "Startups", "Research"],
      subMenuLinks: [
        "https://example.com/tech",
        "https://example.com/startup",
        "https://example.com/research",
      ],
    },
    {
      name: "Solution",
      icon: <Code size={25} />,
      subMenu: ["Development", "Security", "Integration"],
      subMenuLinks: [
        "https://example.com/development",
        "https://example.com/security",
        "https://example.com/integration",
      ],
    },
    {
      name: "Network",
      icon: <Network size={25} />,
      subMenu: ["Events", "Meetups", "Partners"],
      subMenuLinks: [
        "https://example.com/events",
        "https://example.com/meetups",
        "https://example.com/partners",
      ],
    },
    {
      name: "Community",
      icon: <Users size={25} />,
      subMenu: ["Forum", "Support", "Resources"],
      subMenuLinks: [
        "https://example.com/forum",
        "https://example.com/supprot",
        "https://example.com/resources",
      ],
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
      <div className="flex items-center  space-x-5">
        <div className="w-16  h-16 overflow-hidden rounded-full">
          <img
            src={img}
            className="w-full h-full object-cover scale-150 "
            alt="Logo"
          />
        </div>
        <h3 className="hidden md:flex font-bold text-md md:text-lg  bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] to-neutral-500 dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
          DEEPROOTS
        </h3>

        {/* Navbar Links (Desktop) */}

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
                      className={`absolute top-[5rem] p-[15px] rounded-[6px] flex items-center justify-center  w-fit backdrop-blur-md shadow-md transition-opacity duration-700 ease-in-out ${
                        dropdownOpen === index
                          ? "opacity-100 visible pointer-events-auto delay-1000"
                          : "opacity-0 invisible pointer-events-none"
                      } bg-white/10`}>
                      <div className="space-y-2 grid gap-4">
                        {menu?.subMenu?.map((subMenu, index) => (
                          // <div
                          //   key={index}
                          //   className="relative group cursor-pointer p-2 hover:bg-white/20 rounded-md flex items-center  transition duration-300">
                          //   <div className="flex items-center mr-5 gap-3">
                          //     <div className="bg-white/5 p-2 rounded-md text-gray-300 text-lg group-hover/link:bg-neutral-900 bg-neutral-950 group-hover:text-neutral-950 dark:group-hover:text-gray-900 group-hover:bg-white  duration-300">
                          //       {subMenu?.icon}
                          //     </div>
                          //   </div>
                          //   <div className=" text-start group-hover:text-neutral-900">
                          //     <h6 className="font-bold font-sans">
                          //       {subMenu.name}
                          //     </h6>
                          //     <p className="text-sm ">{subMenu.desc}</p>
                          //   </div>
                          // </div>
                          <a
                            key={index}
                            href={subMenu.link} // Add link property
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group cursor-pointer p-2 hover:bg-white/20 rounded-md flex items-center transition duration-300">
                            <div className="flex items-center mr-5 gap-3">
                              <div className="bg-white/5 p-2 rounded-md text-gray-300 text-lg group-hover/link:bg-neutral-900 bg-neutral-950 group-hover:text-neutral-950 dark:group-hover:text-gray-900 group-hover:bg-white  duration-300">
                                {subMenu?.icon}
                              </div>
                            </div>
                            <div className="text-start group-hover:text-neutral-900">
                              <h6 className="font-bold font-sans">
                                {subMenu.name}
                              </h6>
                              <p className="text-sm">{subMenu.desc}</p>
                            </div>
                          </a>
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

          <div className="absolute right-0 mt-2 w-52 bg-white z-50 dark:border-none dark:bg-neutral-800 shadow-lg rounded hidden group-hover:block">
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
            className="lg:hidden absolute top-24 left-0 w-full h-screen text-neutral-950 pt-5  dark:bg-[#1d1f20] bg-neutral-300 dark:text-white p-4 space-y-4">
            {navLinks.map((item, index) => (
              <motion.div key={index} className="relative">
                <button
                  className="flex items-center justify-between w-full text-[#0085a8] font-orbitron font-bold md:my-10 hover:scale-105 mb-8 text-center px-4 py-2 hover:border-2 hover:border-[#0085a8]  rounded transition-all"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === index ? null : index)
                  }>
                  {item.icon}
                  {item.name}
                  <ChevronDown
                    size={25}
                    className={`cursor-pointer transform transition-transform ${
                      mobileDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === index ? null : index)
                    }
                  />
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
                      // <button
                      //   key={i}
                      //   className="block w-full text-left px-4 py-2 bg-neutral-400 text-neutral-950 hover:scale-105 dark:bg-neutral-700 dark:text-neutral-200 font-orbitron hover:bg-neutral-600 rounded transition-all">
                      //   {subItem}
                      // </button>
                      <a
                        key={i}
                        href={item.subMenuLinks[i]} // Add the corresponding link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left px-4 py-2 bg-neutral-400 text-neutral-950 hover:scale-105 dark:bg-neutral-700 dark:text-neutral-200 font-orbitron hover:bg-neutral-600 rounded transition-all">
                        {subItem}
                      </a>
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
