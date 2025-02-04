import { Wallet, Coins, HandCoins, EarthLock} from "lucide-react";
import React from "react";

const Section2 = () => {
  return (
    <main className="my-10 flex dark:bg-neutral-950 justify-center items-center w-full">
      <div className=" lg:grid   gap-10 flex  items-start justify-center flex-col lg:grid-cols-2">
        <div className="flex justify-between items-center">
          <div className=" flex justify-center items-center mx-4 w-20 h-20 rounded-full bg-transparent border-2 border-solid border-[#B26934] text-[#B26934] hover:bg-[#B26934] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
            <Wallet className="w-12 h-12 " />
          </div>
          <div >
            <h2 className="font-bold text-lg md:text-2xl">
              The Address Wallet
            </h2>
            <p className=" ">Manage assets, Wealth creation</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center mx-4 w-20 h-20 rounded-full bg-transparent border-2 border-solid border-[#B26934] text-[#B26934] hover:bg-[#B26934] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
            <Coins className="w-12 h-12 " />
          </div>
          <div>
            <h2 className="font-bold text-lg  md:text-2xl"> Get DRC Token</h2>
            <p className="w-[180px]">Limited Supply of 26M, Start earning now.</p>
          </div>
        </div>
        <div className="flex justify-center  items-center">
          <div className=" flex justify-center items-center mx-4 w-20 h-20 rounded-full bg-transparent border-2 border-solid border-[#B26934] text-[#B26934] hover:bg-[#B26934] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
            <HandCoins className="w-12 h-12 " />
          </div>
          <div className="">
            <h2 className="font-bold text-lg md:text-2xl"> TelexCoin</h2>
            <p className="w-[200px] md:w-full">Hybrid blockcahin.
                              Fast & Secure
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center mx-4 w-20 h-20 rounded-full bg-transparent border-2 border-solid border-[#B26934] text-[#B26934] hover:bg-[#B26934] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
            <EarthLock className="w-12 h-12 " />
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-2xl">
              {" "}
              Deep Roots Network
            </h2>
            <p>The Future of Trading.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Section2