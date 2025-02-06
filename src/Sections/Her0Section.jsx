import banner from "../assets/deeproot-banner.jpg";

import AnimatedText from "../components/AnimationText";
import BlurEffect from "../components/BlurEffect";

import { motion } from "framer-motion";

const Her0Section = () => {
  return (
    <motion.main className="flex justify-center z-10 relative flex-col md:mt-[88px] mt-[93px] lg:mt-[90px]  items-center mb-20">
      <div
        className="w-full h-48 md:h-[500px] lg:h-[750px]  bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${banner})` }}></div>

      {/* Heading */}
      {/* <h1 className="text-3xl text-[#5c4160] md:text-5xl font-orbitron font-bold md:mt-12 mt-6">
        HELLO FUTURE BY DEEPROOTS
      </h1> */}

      <AnimatedText
        text=" HELLO FUTURE BY DEEPROOTS"
        animation="fade"
        as="h1"
        className="font-extrabold text-2xl text-center lg:text-6xl shadow-md shadow-[#0085a8] leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#AD1AAF] dark:via-[#0085a8] to-neutral-500 bg-clip-text font-orbitron text-transparent"
      />

      <div className="z-0  hidden lg:flex text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-[#0085a8] blur-[180px] rounded-full"
        />
      </div>
      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:bottom-16 lg:left-0 bg-[#0085a8] blur-[180px] rounded-full"
        />
      </div>
      {/* Paragraph */}
      {/* <p className=" md:text-xl text-lg font-sans md:tracking-wide text-center my-5 md:w-[40vw]">
        FROM IMPOSSIBLE TO POSSIBLE - A PLATFORM FOR INNOVATIVE APPS AND THE
        NEW-LEVEL OF BLOCKCHAIN NETWORK
      </p> */}
      <AnimatedText
        text=" FROM IMPOSSIBLE TO POSSIBLE - A PLATFORM FOR INNOVATIVE AND THE NEW-LEVEL OF BLOCKCHAIN NETWORK."
        animation="typing"
        as="p"
        className=" md:text-xl text-sm font-sans tracking-wide md:tracking-wide text-center w-[90vw] my-10 lg:w-[60vw] leading-loose mx-2 md:px-5 md:w-[100vw]  "
      />

      {/* Button */}
      <button className="mt-6 mx-5 md:w-[70vw] px-6 font-orbitron py-3 bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-center relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#0085a8] transition-all hover:delay-1000  hover:ease-in-out text-white rounded-2xl w-[80vw] lg:w-[30vw] text-lg md:text-3xl md:my-6 tracking-wider ">
        Join the Movement
      </button>
    </motion.main>
  );
};

export default Her0Section;
