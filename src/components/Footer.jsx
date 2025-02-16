// src/components/Footer.jsx
import React from "react";
import { FaLeaf, FaFlask, FaGlobe, FaLock, FaLink } from "react-icons/fa";
import img from "../assets/logobg.png"
import { GiBullseye } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="dark:bg-black bg-gray-400 dark:text-white py-10 px-5 relative flex w-full justify-center items-center flex-col space-y-10">
      {/* Section 1: Logo and Name */}
      <div className="flex justify-center absolute top-9 left-8 items-center">
        <img
          src={img}
          alt="logo-footer"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full mr-5 shadow-[2px_2px_5px_#ad1aaf,-2px_-2px_5px_#0085a8] dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aaf]"
        />
        <h2 className="md:text-3xl text-2xl font-orbitron font-bold bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text  text-transparent">
          DEEPROOTS
        </h2>
      </div>
      {/* Section 2: Icons with Headers and Links (Grid Layout) */}
      <div className="grid grid-cols-1 w-full md:pt-16 my-16 md:ml-12  md:grid-cols-3 lg:grid-cols-5  items-start justify-center mt gap-8 ">
        {/* Rootverse Academy */}
        <div className="flex justify-center flex-col items-start">
          <div className="flex justify-center  items-center my-5">
            <FaLeaf className="text-green-400 text-3xl mr-2" />
            <h3 className="font-semibold font-orbitron md:text-[16px] lg:text-lg text-lg mb-2">
              Rootverse Academy
            </h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                What is Deep Roots?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                What is DRC?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                The Address Wallet
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                Telexcoin Dex
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                Smart Contract
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                Gas Fees
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                AI Tools
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-green-300"
                target="_blank">
                Foundation
              </a>
            </li>
          </ul>
        </div>

        {/* RootLab */}
        <div className="flex justify-center flex-col items-start">
          <div className="flex justify-center items-center my-5">
            <FaFlask className="text-blue-400 text-3xl mr-2" />
            <h3 className="font-semibold font-orbitron text-lg mb-2">
              RootLab
            </h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                Movement
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                SEEDING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                DEFI
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                DeWorld
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                NFT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                RWA
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                Public Network
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-blue-300"
                target="_blank">
                Private Network
              </a>
            </li>
          </ul>
        </div>

        {/* DeWorld */}
        <div className="flex justify-center items-start flex-col">
          <div className="flex justify-center my-5 items-center">
            <FaGlobe className="text-yellow-400 text-3xl mr-2" />
            <h3 className="font-semibold font-orbitron text-lg mb-2">
              DeWorld
            </h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                The Address
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                TeleXcoin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                Deep Assets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                Share Value
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                InnoFi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                InnoLaunch
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                MetaFabric
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                RootOpia
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-yellow-300"
                target="_blank">
                Saxophone
              </a>
            </li>
          </ul>
        </div>

        {/* RootIdentity */}
        <div className="flex justify-center items-start flex-col">
          <div className="flex justify-center my-5 items-center">
            <FaLock className="text-red-400 text-3xl mr-2" />
            <h3 className="font-semibold font-orbitron text-lg mb-2">
              RootIdentity
            </h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                DeFi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                RWA
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                NFT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                DeVote
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                DeEducation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                DeFashion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                DeCommunity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                Token
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                DeWorld
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                White Paper
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-red-300"
                target="_blank">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* RootConnect */}
        <div className="flex justify-center items-start flex-col">
          <div className="flex justify-center my-5 items-center">
            <FaLink className="text-amber-400 text-3xl mr-2" />
            <h3 className="font-semibold font-orbitron text-lg mb-2">
              RootConnect
            </h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                Social Media
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                Foundation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                InnoFi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                MetaFabrice
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                Podcast
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer hover:text-amber-400"
                target="_blank">
                Hackathon
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Section 3: DeepQuest */}
      <div className="text-center">
        <div className="flex justify-center items-center">
          <GiBullseye className="text-3xl mr-3 text-[#0085a8] " />
          <h3 className="text-xl font-bold font-orbitron bg-gradient-to-r from-[#ad1aaf] bg-clip-text text-transparent to-[#0085a8] mb-2">DeepQuest (Quiz Hub)</h3>
        </div>
        <p className="text-sm dark:text-gray-400">
          Our Story - Brands Assets - Code of Honor - Jobs - Private Policy -
          Term of Use - Cookie Policy - Public Relations
        </p>
      </div>
   
    </footer>
  );
};

export default Footer;
