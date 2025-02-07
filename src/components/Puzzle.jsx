import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaExchangeAlt,
  FaCubes,
  FaMoneyBillWave,
  FaGlobe,
  FaShieldAlt,
  FaGamepad,
  FaSeedling,
  FaUsers,
  FaWallet,
  FaCoins,
} from "react-icons/fa";

const puzzleItems = [
  {
    icon: FaExchangeAlt,
    title: "High-Frequency Trading & DEX",
    description: "Lightning-fast execution.",
    color: "text-[#007BFF]",
  },
  {
    icon: FaCubes,
    title: "Asset Tokenization",
    description: "Trade fractional real-world assets.",
    color: "text-[#8A2BE2]",
  },
  {
    icon: FaMoneyBillWave,
    title: "Low-Cost Transactions",
    description: "Micro-payments with minimal fees.",
    color: "text-[#FF5733]",
  },
  {
    icon: FaShieldAlt,
    title: "Truly Dynamic Blockchain",
    description: "Borderless, scalable, and adaptable.",
    color: "text-yellow-500",
  },
  {
    icon: FaGamepad,
    title: "GameFi with Rootopia",
    description: "Elevating blockchain gaming.",
    color: "text-[#FF00FF]",
  },
  {
    icon: FaSeedling,
    title: "Seeding & Foundation",
    description: "Fueling ecosystem growth.",
    color: "text-orange-500",
  },
  {
    icon: FaUsers,
    title: "Referral & Rewards",
    description: "Earn by expanding the network.",
    color: "text-[#00FFFF]",
  },
  {
    icon: FaWallet,
    title: "Secure Digital Wallet",
    description: "Manage DRC, RWA & more.",
    color: "text-teal-500",
  },
  {
    icon: FaCoins,
    title: "Limited Coin Utility",
    description: "Exclusive access & governance.",
    color: "text-indigo-500",
  },
  {
    icon: FaGlobe,
    title: "Cross-Border Payments",
    description: "Fast, low-cost global transfers.",
    color: "text-[#40E0D0]",
  },
];

const PuzzleBox = () => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    if (!isDragging) {
      controls.start({
        x: [currentX, "-100%"],
        transition: { ease: "linear", duration: 20,delay:3, repeat: Infinity },
      });
    }
  }, [controls, isDragging, currentX]);

  return (
    <div className="w-full  py-10 overflow-x-aut scrollbar-hide touch-pan-x">
      <motion.div
        className="flex space-x-6 px-6"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        whileDrag={{
          cursor:"grabbing"
        }}
        
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(event, info) => {
          setIsDragging(false);
          setCurrentX(info.point.x);
        }}
        animate={controls}>
        {puzzleItems.concat(puzzleItems).map((item, index) => (
          <div
            key={index}
            className="bg-neutral-300 dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center flex flex-col items-center gap-4 min-w-[250px]">
            <item.icon className={`${item.color} text-4xl`} />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PuzzleBox;
