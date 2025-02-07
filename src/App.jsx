import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Nav";
import "./index.css";
import BlurEffect from "./components/BlurEffect";
import Her0Section from "./Sections/Her0Section";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section8 from "./Sections/Section8";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import ComparisonSection from "./Sections/Section9";
import Section10 from "./Sections/Section10";
import Section11 from "./Sections/Section11";
import Section12 from "./Sections/Section12";
// //import Section9 from "./Sections/Section9";
// //import ComparisonSection from "./Sections/Section9";


// function App() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   // Apply theme on mount and toggle
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);
//   return (
//     <main className="overflow-hidden relative bg-neutral-300 dark:bg-[#1c1d20] dark:text-neutral-200 ">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <div className="z-0 text-lg">
//         <BlurEffect
//           color="#0085a8"
//           className="w-60 h-60 absolute lg:top-0 lg:right-0 bg-[#0085a8] blur-[250px] rounded-full"
//         />
//       </div>
//       <Her0Section />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <Section5 />
//       <Section6 />
//       <Section7/>
//       <Section8 />
// <ComparisonSection/>

//     </main>
//   );
// }

// export default App;


function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

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
    <main className="overflow-hidden relative bg-neutral-300 dark:bg-[#1c1d20] dark:text-neutral-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:top-0 lg:right-0 bg-[#0085a8] blur-[250px] rounded-full"
        />
      </div>
      <Her0Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <ComparisonSection />
      <Section10 />
      <Section11 />
      <Section12/>
    </main>
  );
}

export default App;
