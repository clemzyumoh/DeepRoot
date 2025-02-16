import { useState, useEffect } from "react";
import img from "./NavBar/logo.jpg";




const CryptoGenerations = () => {


  return (
    <section
      className={`flex flex-col lg:flex-row justify-center items-center gap-6 p-8 transition-al`}>
      {/* Bitcoin Card */}
      <div
        className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg w-72 transition-all`}>
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt="Bitcoin Logo"
          className="w-16 h-16"
        />
        <h2 className="text-2xl font-bold mt-4">Bitcoin (BTC)</h2>
        <p className="text-sm text-gray-400">1st Generation</p>
        <div className="mt-4 text-left">
          <h3 className="text-lg font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Proof of Work (PoW)</li>
            <li>Decentralized Ledger</li>
            <li>Limited Smart Contracts</li>
            <li>Store of Value</li>
          </ul>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-gray-500 dark:text-gray-400">
        <span className="hidden lg:block">➝</span>{" "}
        {/* Right arrow for desktop */}
        <span className="block lg:hidden">↓</span> {/* Down arrow for mobile */}
      </div>

      {/* Ethereum Card */}
      <div
        className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg w-72 transition-all`}>
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
          alt="Ethereum Logo"
          className="w-16 h-16"
        />
        <h2 className="text-2xl font-bold mt-4">Ethereum (ETH)</h2>
        <p className="text-sm text-gray-400">2nd Generation</p>
        <div className="mt-4 text-left">
          <h3 className="text-lg font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Proof of Stake (PoS)</li>
            <li>Smart Contracts</li>
            <li>DeFi & DApps</li>
            <li>Scalability Improvements</li>
          </ul>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-gray-500 dark:text-gray-400">
        <span className="hidden lg:block">➝</span>{" "}
        {/* Right arrow for desktop */}
        <span className="block lg:hidden">↓</span> {/* Down arrow for mobile */}
      </div>

      {/* DRC (DeppRoots Coin) */}
      <div
        className={`flex flex-col items-center text-center p-6 rounded-lg  shadow-xl w-72 transition-all`}>
   
                <div className="w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src={img}
                          className="w-full h-full object-cover scale-110 "
                          alt="Logo"
                        />
                      </div>
        <h2 className="text-2xl font-bold mt-4">DeepRoots Coin (DRC)</h2>
        <p className="text-sm text-gray-400">3rd Generation</p>
        <div className="mt-4 text-left">
          <h3 className="text-lg font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Proof of DeWorld</li>
            <li>AI & Blockchain Integration</li>
            <li>High Scalability</li>
            <li>Interoperability</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CryptoGenerations;
