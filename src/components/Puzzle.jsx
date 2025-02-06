import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaCubes,
  FaMoneyBillWave,
  FaShieldAlt,
  FaWallet,
  FaCoins,
  FaGlobe,
} from "react-icons/fa";

const puzzleItems = [
  {
    icon: FaExchangeAlt,
    title: "High-Frequency Trading & DEX",
    description: "150,000 TPS for fast execution.",
  },
  {
    icon: FaCubes,
    title: "Asset Tokenization & RWA Trading",
    description: "Trading fractional ownership of real-world assets.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Low-Cost Transactions for Everyday Use",
    description: "Micro-transactions with low gas fees.",
  },
  {
    icon: FaShieldAlt,
    title: "Hybrid Blockchain for Security & Scalability",
    description: "PoS and PoH for better performance.",
  },
  {
    icon: FaWallet,
    title: "Digital Wallet for Secure Asset Management",
    description: "User-friendly wallet for DRC and RWA.",
  },
  {
    icon: FaCoins,
    title: "Limited Coin For Scarcity & Utility",
    description: "Governance token with exclusive access.",
  },
  {
    icon: FaGlobe,
    title: "Cross-Border Payment & Remittances",
    description: "Fast, low-cost global transactions.",
  },
];

const PuzzleBox = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 dark:bg-gray-900 py-20">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex space-x-6">
        {puzzleItems.concat(puzzleItems).map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center flex flex-col items-center gap-4 min-w-[250px]">
            <item.icon className="text-blue-500 text-4xl" />
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
