import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Nav";
import "./index.css";
import BlurEffect from "./components/BlurEffect";
import Her0Section from "./Sections/Her0Section";
import Section2 from "./Sections/Section2";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on mount and toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <main className="overflow-x-hidden relative bg-neutral-300 dark:bg-[#1c1d20] dark:text-neutral-200 ">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:top-0 lg:right-0 bg-[#0085a8] blur-[180px] rounded-full"
        />
      </div>
      <Her0Section />
      <Section2/>
    </main>
  );
}

export default App;
