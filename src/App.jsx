// import React, { useState, useEffect } from "react";
// import Navbar from "./components/NavBar/Nav";
// import "./index.css";
// import BlurEffect from "./components/BlurEffect";
// import Her0Section from "./Sections/Her0Section";
// import Section2 from "./Sections/Section2";
// import Section3 from "./Sections/Section3";
// import Section4 from "./Sections/Section4";
// import Section5 from "./Sections/Section5";
// import Section8 from "./Sections/Section8";
// import Section6 from "./Sections/Section6";
// import Section7 from "./Sections/Section7";
// import ComparisonSection from "./Sections/Section9";
// import Section10 from "./Sections/Section10";
// import Section11 from "./Sections/Section11";
// //import Section12 from "./Sections/Section12";
// import Section13 from "./Sections/Section13";
// import InnoFiSection from "./Sections/Section14";
// import Section15 from "./Sections/Section15";
// import Section16 from "./Sections/Section16";
// import Section17 from "./Sections/Section17";
// import Drc from "./components/Drc";
// import Footer from "./components/Footer";
// import CardList from "./components/CardList";
// // //import Section9 from "./Sections/Section9";
// // //import ComparisonSection from "./Sections/Section9";

// // function App() {
// //   const [darkMode, setDarkMode] = useState(
// //     localStorage.getItem("theme") === "dark"
// //   );

// //   // Apply theme on mount and toggle
// //   useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add("dark");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [darkMode]);
// //   return (
// //     <main className="overflow-hidden relative bg-neutral-300 dark:bg-[#1c1d20] dark:text-neutral-200 ">
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// //       <div className="z-0 text-lg">
// //         <BlurEffect
// //           color="#0085a8"
// //           className="w-60 h-60 absolute lg:top-0 lg:right-0 bg-[#0085a8] blur-[250px] rounded-full"
// //         />
// //       </div>
// //       <Her0Section />
// //       <Section2 />
// //       <Section3 />
// //       <Section4 />
// //       <Section5 />
// //       <Section6 />
// //       <Section7/>
// //       <Section8 />
// // <ComparisonSection/>

// //     </main>
// //   );
// // }

// // export default App;

// function App() {
//   const [darkMode, setDarkMode] = useState(true); // Default to dark mode

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "light") {
//       setDarkMode(false);
//     } else {
//       setDarkMode(true);
//     }
//   }, []);

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
//     <main className="overflow-hidden relative bg-neutral-300 dark:bg-[#1c1d20] dark:text-neutral-200">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <div className="z-0 text-lg">
//         <BlurEffect
//           color="#0085a8"
//           className="w-60 h-60 absolute lg:top-0 lg:right-0 hidden bg-[#0085a8] blur-[300px] rounded-full"
//         />
//       </div>
//       <Her0Section />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <Section5 />
//       <Section6 />
//       <Section16 />
//       <InnoFiSection />
//       <Section15 />
//       <Section13 />
//       <Drc/>

//       <Section8 />
//       <ComparisonSection />

//       <Section11 />
//       <Section7 />

//       <Section17 />
//       <Section10 />

//       <Footer/>
//     </main>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Nav";
import "./index.css";
import BlurEffect from "./components/BlurEffect";
import Her0Section from "./Sections/Her0Section";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import Section8 from "./Sections/Section8";
import ComparisonSection from "./Sections/Section9";
import Section10 from "./Sections/Section10";
import Section11 from "./Sections/Section11";
import Section13 from "./Sections/Section13";
import InnoFiSection from "./Sections/Section14";
import Section15 from "./Sections/Section15";
import Section16 from "./Sections/Section16";
import Section17 from "./Sections/Section17";
import Drc from "./components/Drc";
import Footer from "./components/Footer";
import img from "./assets/land1.png";
import banner from "./assets/land1.png";

// List of allowed users
const users = [
  { username: "Deeproots", password: "AdamRoots" },
  { username: "invite2", password: "secure456" },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Check if user is already logged in (persistent login)
  // useEffect(() => {
  //   const loggedIn = localStorage.getItem("isAuthenticated");
  //   if (loggedIn) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  useEffect(() => {
    // Clear authentication state on reload
    setIsAuthenticated(false);
  }, []);

  // Handle login form submission
  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Check if the user is in the allowed list
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Access Denied!");
    }
  };

  // Logout function
  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem("isAuthenticated");
  // };

  // Handle dark mode toggle
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

  // If not authenticated, show the login form
  if (!isAuthenticated) {
    return (
      // <div className="flex flex-col lg:flex-row items-center lg:px-20 justify-center min-h-screen w-full bg-neutral-100 dark:bg-[#1c1d20] dark:text-neutral-200">
      //   <h2 className="text-2xl hidden md:text-4xl md:mb-8 font-bold bg-gradient-to-bl from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent font-orbitron mb-4">
      //     DEEPROOTS LOGIN
      //   </h2>
      //   <div className="lg:w-1/2 hidden w-full px-3 lg:px-0">
      //     <img src={img} alt="" className=" w-full rounded-md" />
      //   </div>

      // <div className="flex flex-col lg:w-1/2 w-full items-center mt-12 justify-center">
      //   <h2 className="text-2xl hidden  font-bold mb-8 bg-gradient-to-bl from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent font-orbitron">
      //     DEEPROOTS LOGIN
      //   </h2>
      //   <form
      //     onSubmit={handleLogin}
      //     className="bg-white dark:bg-neutral-800 p-6 rounded-lg hidden shadow-md">
      //     <input
      //       type="text"
      //       name="username"
      //       placeholder="Username"
      //       required
      //       className=" p-2 mb-4 w-full rounded dark:bg-neutral-700 dark:text-white"
      //     />
      //     <input
      //       type="password"
      //       name="password"
      //       placeholder="Password"
      //       required
      //       className=" p-2 mb-4 w-full rounded  dark:bg-neutral-700 dark:text-white"
      //     />
      //     <button
      //       type="submit"
      //       className=" text-white p-2 bg-gradient-to-r rounded from-[#0085a8] to-[#ad1aaf] w-full">
      //       Login
      //     </button>
      //   </form>
      // </div>
      //     <div
      //           className="w-full h-48 md:h-[500px] lg:h-[750px]  bg-cover  bg-center "
      //           style={{ backgroundImage: `url(${banner})` }}></div>
      // </div>
      <div
        className="w-full h-screen bg-cover flex justify-center items-center  bg-center "
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="flex flex-col lg:w-1/2 w-full rounded-lg backdrop-blur-md shadow-md transition-opacity p-5 md:p-10 items-center  justify-center">
          <div className="flex justify-center items-center flex-col bg-gray-800 md:p-8 rounded-md">
            <div className="flex justify-center  items-center">
              <h2 className="md:text-4xl shadow-2xl text-2xl font-bold  bg-gradient-to-bl from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent font-orbitron">
                DEEPROOTS LOGIN
              </h2>
            </div>
            <form
              onSubmit={handleLogin}
              className="bg-transparent p-6 rounded-lg  shadow-md">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className=" p-2 mb-4 w-full rounded dark:bg-neutral-700 dark:text-white"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className=" p-2 mb-4 w-full rounded  dark:bg-neutral-700 dark:text-white"
              />
              <button
                type="submit"
                className=" text-white p-2 bg-gradient-to-r rounded from-[#0085a8] to-[#ad1aaf] w-full">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, show the main site with logout option
  return (
    <main className="overflow-hidden relative bg-neutral-300 dark:bg-[#1c1d20] dark:text-neutral-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:top-0 lg:right-0 hidden bg-[#0085a8] blur-[300px] rounded-full"
        />
      </div>

      {/* <button
        onClick={handleLogout}
        className="fixed top-4 lg:right-60 hidden md:left-64 md:top-7  bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 z-50 shadow-lg">
        Logout
      </button> */}

      <Her0Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section16 />
      <InnoFiSection />
      <Section15 />
      <Section13 />
      <Drc />
      <Section8 />
      <ComparisonSection />
      <Section11 />
      <Section7 />
      <Section17 />
      <Section10 />
      <Footer />
    </main>
  );
}

export default App;
