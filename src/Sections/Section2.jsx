import { Wallet, Coins, HandCoins, EarthLock } from "lucide-react";
import React from "react";

import AnimateItem from "../components/AnimationItem";
import BlurEffect from "../components/BlurEffect";

const Section2 = () => {
  return (
    <main className="md:my-10 my-5 py-10 md:py-20 flex bg-neutral-400 dark:bg-neutral-950 justify-center flex-col items-center w-full">
      <div className="mt-10 lg:w-[100vw] gap-6 w-full px-4 mg:px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <AnimateItem
          direction="top"
          delay={0.1}
          className="lg:direction-left md:direction-right sm:direction-bottom">
          <div className=" flex items-center justify-between md:justify-around">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <Wallet className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
            </div>

            <div className="flex items-start flex-col">
              <h2 className="font-bold text-md md:text-lg text-center  leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] to-neutral-500 dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                The Address Wallet
              </h2>
              <p className="font-sans text-sm">
                Manage assets, Wealth creation
              </p>
            </div>
          </div>
        </AnimateItem>
        <AnimateItem
          direction="left"
          delay={0.2}
          className="lg:direction-bottom md:direction-top sm:direction-right">
          <div className=" flex items-center justify-between md:justify-around ">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <Coins className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
            </div>

            <div className="flex items-start flex-col">
              <h2 className="font-bold text-md md:text-lg text-center   leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] to-neutral-500 dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                Get DRC Token.
              </h2>
              <p className="font-sans text-[11px] md:text-[12px]">
                Limited Supply of 26M, Start earning now.
              </p>
            </div>
          </div>
        </AnimateItem>
        <AnimateItem
          direction="right"
          delay={0.3}
          className="lg:direction-right md:direction-left sm:direction-top">
          <div className=" flex items-center justify-between md:justify-around">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <HandCoins className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
            </div>

            <div className="flex items-start flex-col">
              <h2 className="font-bold text-md md:text-lg text-center   leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] to-neutral-500 dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                TELEXCOIN
              </h2>
              <p className="font-sans text-sm">
                {" "}
                Hybrid blockchain. Fast & Secure.
              </p>
            </div>
          </div>
        </AnimateItem>
        <AnimateItem
          direction="bottom"
          delay={0.4}
          className="lg:direction-top md:direction-bottom sm:direction-left">
          <div className=" flex items-center justify-between md:justify-around">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <EarthLock className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
            </div>

            <div className="flex items-start flex-col">
              <h2 className="font-bold md:text-lg text-md text-center   leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] to-neutral-500 dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                DEEPROOTS NETWORK.
              </h2>
              <p className="font-sans text-sm">The Future of Trading..</p>
            </div>
          </div>
        </AnimateItem>
      </div>
      <BlurEffect
        color="#ad1aa0"
        className="w-60 h-60 absolute lg:bottom-16 lg:left-0 bg-[#ad1aa0] blur-[180px] rounded-full"
      />
    </main>
  );
};

export default Section2;
