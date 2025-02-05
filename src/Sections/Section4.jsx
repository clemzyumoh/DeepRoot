import AnimateItem from "../components/AnimationItem";
import AnimatedText from "../components/AnimationText";
import { GoRocket } from "react-icons/go";
import img from "../assets/Group 15.png";
import img1 from "../assets/group.png";
import BlurEffect from "../components/BlurEffect";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { IoGlobe } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { LuSiren } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";

const Section4 = () => {
  return (
    <main className="my-20 relative md:px-10 lg:px-14 px-5">
      <div className="flex justify-center flex-col md:flex-row items-center w-full">
        <div className="flex justify-start w-full text- md:items-center lg:items-start lg:text-start items-start flex-col">
          <AnimatedText
            text=" Welcome to TelexCoin DEX: Your Gateway to the future of Finance"
            animation="fade"
            as="h1"
            className="font-extrabold text-2xl text-center lg:text-start lg:text-3xl   my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#AD1AAF] dark:via-[#0085a8] to-neutral-500 bg-clip-text font-orbitron text-transparent"
          />
          <div className="w- hidden dark:flex dark:lg:hidden lg:hidden my-10">
            <img src={img} alt="" className="" />
          </div>
          <div className="w-full lg:hidden flex dark:lg:hidden dark:hidden my-10">
            <img src={img1} alt="" className="" />
          </div>
          <div className="flex justify-center  mt-6 items-center">
            <AnimateItem
              direction="top"
              delay={0.1}
              className="lg:direction-left  md:direction-right sm:direction-bottom">
              <GoRocket className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
            </AnimateItem>
            <AnimatedText
              text=" Exclusive Early Access to DRC Tokens"
              animation="fade"
              as="h4"
              className="font-sans ml-3 text-lg"
            />
          </div>
          <p className=" font-sans mt-5 lg:w-[500px] md:w-[70vw]">
            Buy DRC tokens during the ICO-limited supply. Maximize rewards by
            gettings in early.
          </p>
          <button className="mt-6 lg:mt-10  md:w-[70vw] px-6 font-orbitron py-3 bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-center relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#0085a8] transition-all hover:delay-1000  hover:ease-in-out text-white rounded-2xl w-[80vw] lg:max-w-[30vw] text-lg md:text-3xl md:my-6 tracking-wider ">
            Learn More...
          </button>
        </div>
        <div className="w-full hidden lg:hidden dark:lg:flex">
          <img src={img} alt="" className="" />
        </div>
        <div className="w-full relative hidden dark:lg:hidden lg:flex">
          <img src={img1} alt="" className="" />
          <div className="z-0 text-lg">
            <BlurEffect
              color="#ad1aa0"
              className="w-72 h-72 absolute top-150 right-200 bg-[#ad1aa0] dark:bg-[#0085a8] blur-[180px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=" grid my-10 lg:grid-cols-3 md:gap-10 gap-6 md:grid-cols-2 grid-cols-1">
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoDiamond className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Earn with Staking"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Stake your tokens and earn high APYs. Stake earning rewards
              immediately with our secure, easy system.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoGlobe className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Provide Liquidity, Earn more"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Contribute to liquidity pools and earn a share of trading fees.
              More Liquidity = More Rewards
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <FaGripfire className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Why TeleCoin DEX ?"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Exclusive ICO acces to DRC tokens. 12% + annual rewards for
              staking DRC and other tokens. Earn liquidity rewards by adding
              liquidity to our pools.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <FaChartLine className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="Trade, Swap, Earn"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Trade and swap tokens with zero slippage on TeleCoin DEX. Secure
              and fast trading at your fingertips.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <LuSiren className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="Limited Time Offers!"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Earn access to features, events, and token sales--JOIN NOW!.
              Secure your spot before DRC tokens sell out.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <FaHandshake className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="Get Involved Now! "
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Buy DRC tokens exclusively on TeleCoin DEX during the ICO. Stake &
              earn rewards while supporting the ecosystem. Provide liquidity and
              grow with TeleCoin DEX.
            </p>
          </div>
        </div>
      </div>

      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:top-0 dark:lg:right-0 lg:right-16 bg-neutral-950 dark:bg-[#0085a8] blur-[180px] rounded-full"
        />
      </div>
    </main>
  );
};

export default Section4;
