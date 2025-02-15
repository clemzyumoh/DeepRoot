import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Paintbrush,
  User,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import MetaFabricImage from "../assets/metafabric.webp"; // Example image path
import BlurEffect from "../components/BlurEffect";
import AnimateItem from "../components/AnimationItem";

const MetaFabricSection = () => {
  return (
    <section className="flex relative flex-col lg:flex-row items-center py-10  p-6 lg:p-12 gap-8 bg-white dark:bg-neutral-900">
      {/* Image */}

      <AnimateItem direction="left" delay={0.2}>
        <img
          src={MetaFabricImage}
          alt="MetaFabric Fashion"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </AnimateItem>
      <BlurEffect
        color="#9a37f0"
        className="w-60 h-60 top-32 right-12 blur-[350px] md:blur-[200px] bg-[#b875f3] rounded-full absolute"
      />
     
      <AnimateItem delay={0.2} direction="right">
        <div className="w-full  text-gray-800 font-sans dark:text-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
            MetaFabric: From Blockchain to Runway Your Style, Your NFT DeWorld
          </h2>
          <ul className="space-y-4 ">
            <li className="flex items-center gap-3 ">
              <ShoppingCart className="text-blue-500 w-12 h-12 mr-3" />
              <span className="">
                NFT Marketplace: Buy, sell, and trade digital art designed for
                fashion.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Paintbrush className="text-[#ee49fc] w-12 h-12 mr-3" />
              <span>
                Custom Printing: Transform your NFTs into wearable fashion on
                clothes, accessories, and more.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <User className="text-green-500 w-12 h-12 mr-3" />
              <span>
                Designer Collaboration: Connect with top designers to create
                custom fashion pieces.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-yellow-500 w-12 h-12 mr-3" />
              <span>
                Fashion Meets Blockchain: Own unique fashion that’s verified and
                secured on the blockchain.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone className="text-[#9a37f0] w-12 h-12 mr-3" />
              <span>
                Seamless Experience: Shop, design, and print directly from the
                MetaFabric platform.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Sparkles className="text-red-500 w-12 h-12 mr-3"/>
              <span>
                Lifestyle Redefined: Wear your creativity and show off your
                digital art in the real world.
              </span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] text-white rounded-lg hover:border-2 hover:bg-none hover:dark:text-neutral-200 hover:text-neutral-900 font-bold hover:border-[#ee49fc] transition">
            Explore MetaFabric
          </button>
        </div>
      </AnimateItem>
    </section>
  );
};

export default MetaFabricSection;
