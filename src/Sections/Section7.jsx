import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Understand DeepRoots",
    content: "Introduction to the platform mission...",
  },
  { title: "What is DeepRoots?", content: "Overview of the ecosystem..." },
  {
    title: "What is the Address Wallet?",
    content: "Explanation of wallet functionality...",
  },
  {
    title: "What is TelexCoin?",
    content: "Details on the currency...",
  },
  {
    title: "How to Start with DeepRoots",
    content: "Step by step guide to getting started...",
  },
  {
    title: "DeepRoots Whitepaper",
    content: "Link to platform's whitepaper...",
  },
  {
    title: "DeepRoots Roadmap",
    content: "Showcase the platform's future goals...",
  },
  // Add the remaining items here
];

const Section7 = () => {
      const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">About DeepRoots</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="border border-[#0085a8] rounded-lg">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <span className="font-semibold">{item.title}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-3">
                {item.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section7