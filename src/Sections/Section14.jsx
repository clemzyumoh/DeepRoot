// import React from "react";
// import { motion } from "framer-motion";
// import { Users, Target, ThumbsUp, Rocket, Eye } from "lucide-react";
// import InnoFiImage from "../assets/vote.webp"; // Example image path
// import AnimateItem from "../components/AnimationItem";

// const InnoFiSection = () => {
//   return (
//     <section className="flex flex-col lg:flex-row items-center p-6 lg:p-12 gap-8 bg-gray-50 dark:bg-transparent my-16 shadow-sm shadow-neutral-900 dark:shadow-white">
//       {/* Image */}
   
//       <AnimateItem direction="left" delay={0.2} >
//         <img
//           src={InnoFiImage}
//           alt="InnoFi Innovation"
//           className="w-full md:w-[700px] md:h-[500px] rounded-2xl shadow-lg"
//         />
//       </AnimateItem>

//       {/* Details */}
//       <motion.div
//         className="w-full lg:w-1/2 text-gray-800 dark:text-gray-200"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}>
//         <h2 className="text-3xl font-bold mb-4">
//           InnoFi: Fund & Vote – Innovate DeWorld Projects by Milestone
//         </h2>
//         <ul className="space-y-4">
//           <li className="flex items-start gap-3">
//             <Users className="text-blue-500" />
//             <span>
//               Community-Driven Innovation: Fund and vote on projects shaping
//               DeWorld’s future.
//             </span>
//           </li>
//           <li className="flex items-start gap-3">
//             <Target className="text-green-500" />
//             <span>
//               Milestone-Based Funding: Support projects at key stages and track
//               progress.
//             </span>
//           </li>
//           <li className="flex items-start gap-3">
//             <ThumbsUp className="text-purple-500" />
//             <span>
//               Democratic Approval: Community votes to approve or reject
//               innovative ideas.
//             </span>
//           </li>
//           <li className="flex items-start gap-3">
//             <Rocket className="text-pink-500" />
//             <span>
//               Empowering Creators: Back innovators and help bring their projects
//               to life.
//             </span>
//           </li>
//           <li className="flex items-start gap-3">
//             <Eye className="text-yellow-500" />
//             <span>
//               Transparency & Control: Manage investments and influence project
//               outcomes with full transparency.
//             </span>
//           </li>
//         </ul>
//         <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
//           Join InnoFi
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default InnoFiSection;

import { motion } from "framer-motion";
import { FaUsers, FaThumbsUp } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { IoMdCheckmarkCircleOutline, IoMdEye } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import InnoFiImage from "../assets/vote.webp"; // Example image path
import BlurEffect from "../components/BlurEffect";
import AnimatedText from "../components/AnimationText";

const innofiItems = [
  {
    icon: FaUsers,
    title: "Community-Driven Innovation",
    description: "Fund and vote on projects shaping DeWorld’s future.",
  },
  {
    icon: GoRocket,
    title: "Milestone-Based Funding",
    description: "Support projects at key stages and track progress.",
  },
  {
    icon: FaThumbsUp,
    title: "Democratic Approval",
    description: "Community votes to approve or reject innovative ideas.",
  },
  {
    icon: IoMdCheckmarkCircleOutline,
    title: "Empowering Creators",
    description: "Back innovators and help bring their projects to life.",
  },
  {
    icon: IoMdEye,
    title: "Transparency & Control",
    description:
      "Manage investments and influence project outcomes with full transparency.",
  },
  {
    icon: CiWallet,
    title: "Secure Wallet Integration",
    description:
      "Seamlessly connect your wallet for secure funding and voting.",
  },
];

const InnoFiSection = () => {
  return (
    <section className="w-full bg-[#F0FAFD] dark:bg-gray-900 my-20 py-28 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex justify-start lg:items-start items-center flex-col ">
          <AnimatedText
            text="InnoFi:"
            animation="fade"
            as="h1"
            className="font-extrabold  lg:max-w-[600px] text-3xl leading-[40px]  lg:text-start lg:text-4xl   lg:leading-normal bg-gradient-to-r from-[#fb7087] via-[#76dbfa] to-[#76dbfa] bg-clip-text font-orbitron text-transparent"
          />
          <AnimatedText
            text="FUND & VOTE DeWorld"
            animation="fade"
            as="h1"
            className="font-extrabold lg:max-w-[600px] text-xl leading-[40px]  lg:text-start lg:text-2xl   lg:leading-normal bg-gradient-to-l from-[#fb7087] to-[#76dbfa] bg-clip-text font-orbitron text-transparent"
          />
        </div>
        <div className="w-full lg:hidden">
          <img
            src={InnoFiImage}
            alt="InnoFi Innovation"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          {innofiItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:scale-105  dark:text-neutral-200 rounded-lg shadow-md">
              <item.icon className="text-5xl text-[#fb7087]" />
              <div>
                <h3 className="text-lg font-semibold font-orbitron  ">
                  {item.title}
                </h3>
                <p className="  text-sm">{item.description}</p>
              </div>
            </div>
          ))}
          <button className="mt-6 font-bold  lg:mt- border-2 lg:hidden hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#fb7087] to-[#76dbfa] mr-6 px-6 font-orbitron py-3 text-center hover:border-2 border-[#fb7087] dark:hover:bg-none hover:text-[#fb7087] transition-all hover:ease-in-out rounded-lg text-lg tracking-wider">
            VOTE
          </button>
        </motion.div>
      </div>
      <div className="z-0 text-lg">
        <BlurEffect
          color="#F0FAFD"
          className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-gradient-to-r from-[#EEE1CC] to-[#F0FAFD] blur-[300px] lg:dark:blur-[250px] rounded-full"
        />
      </div>
      {/* Image Section */}
      <div className="w-[800px] h-[500px] mt-36 hidden lg:flex justify-center py-72 items-center flex-col">
        <img
          src={InnoFiImage}
          alt="InnoFi Innovation"
          className="w-full rounded-lg shadow-lg"
        />
        <button className="mt-6 font-bold w-1/2 justify-center  lg:my-10 border-2 hidden md:flex hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#fb7087] to-[#76dbfa] mr-6 px-6  font-orbitron py-3 text-center hover:border-2 border-[#fb7087] dark:hover:bg-none hover:text-[#fb7087] transition-all hover:ease-in-out rounded-lg text-2xl tracking-wider">
          VOTE
        </button>
      </div>
    </section>
  );
};

export default InnoFiSection;
