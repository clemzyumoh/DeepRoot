import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
    color: "text-red-500",
  },
  {
    icon: FaCubes,
    title: "Asset Tokenization",
    description: "Trade fractional real-world assets.",
    color: "text-amber-600",
  },
  {
    icon: FaMoneyBillWave,
    title: "Low-Cost Transactions",
    description: "Micro-payments with minimal fees.",
    color: "text-[#ad1]",
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
    color: "text-blue-400",
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
    color: "text-",
  },
  {
    icon: FaWallet,
    title: "Secure Digital Wallet",
    description: "Manage DRC, RWA & more.",
    color: "text-[#1a9]",
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
    color: "text-[#0085A8]",
  },
];

const PuzzleBox = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { ease: "linear", duration: 20, repeat: Infinity },
    });
  }, [controls]);

  return (
    <div className="w-full  py-20 verflow-x-hidden scrollbar-hide touch-pan-x">
      <motion.div
        className="flex space-x-6 px-6"
        drag="x"
        whileDrag={{ cursor: "grabbing" }}
        dragConstraints={{ left: -1000, right: 0 }}
        onDragEnd={() =>
          controls.start({
            x: ["0%", "-100%"],
            transition: { ease: "linear", duration: 20, repeat: Infinity },
          })
        }
        animate={controls}>
        {puzzleItems.concat(puzzleItems).map((item, index) => (
          <div
            key={index}
            className="bg-neutral-400 dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center flex  flex-col items-center gap-4 min-w-[250px]">
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
