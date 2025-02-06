import { motion } from "framer-motion";
import {
  Zap,
  Eye,
  Lock,
  Link,
  Globe,
  Handshake,
  RefreshCcw,
  Sliders,
  ShieldAlert,
  DollarSign,
  Hourglass,
  Lock as LockOpen,
  BadgeX,
} from "lucide-react";

const decentralizedData = [
  { word: "Empowered", icon: <Zap size={20} className="text-green-600 mr-5 " /> },
  { word: "Transparent", icon: <Eye size={20} className="text-green-600 mr-5" /> },
  { word: "Secure", icon: <Lock size={20} className="text-green-600 mr-5" /> },
  { word: "Trustless", icon: <Link size={20} className="text-green-600 mr-5" /> },
  { word: "Global", icon: <Globe size={20} className="text-green-600 mr-5" /> },
  {
    word: "Inclusive",
    icon: <Handshake size={20} className="text-green-600 mr-5" />,
  },
  {
    word: "Resilient",
    icon: <RefreshCcw size={20} className="text-green-600 mr-5" />,
  },
];

const centralizedData = [
  { word: "Controlled", icon: <Sliders size={20} className="text-red-600 mr-5" /> },
  { word: "Limited", icon: <ShieldAlert size={20} className="text-red-600 mr-5" /> },
  { word: "Risky", icon: <DollarSign size={20} className="text-red-600 mr-5" /> },
  { word: "Corruptible", icon: <BadgeX size={20} className="text-red-600 mr-5" /> },
  {
    word: "Expensive",
    icon: <DollarSign size={20} className="text-red-600 mr-5" />,
  },
  {
    word: "Inefficient",
    icon: <Hourglass size={20} className="text-red-600 mr-5" />,
  },
  { word: "Exclusive", icon: <LockOpen size={20} className="text-red-600 mr-5" /> },
];

export default function ComparisonSection() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="md:text-3xl text-xl font-bold text-center lg:mb-14 mb-8">
        Decentralized vs Centralized Comparison
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Decentralized Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-8 flex items-center">
            <Globe size={30} className="mr-6 text-green-600" /> Decentralized
          </h3>
          <ul className="space-y-2">
            {decentralizedData.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-5 text-green-600 dark:text-green-200 font-medium"
                whileHover={{ scale: 1.1 }}>
                {item.icon} <span>{item.word}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Centralized Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300  mb-8 flex items-center">
            <Sliders size={30} className="mr-6 text-red-600" /> Centralized
          </h3>
          <ul className="space-y-2">
            {centralizedData.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-5 text-red-600 dark:text-red-200 font-medium"
                whileHover={{ scale: 1.1 }}>
                {item.icon} <span>{item.word}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
