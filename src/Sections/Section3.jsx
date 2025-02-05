import AnimateItem from "../components/AnimationItem";
import AnimatedText from "../components/AnimationText";
import { GoRocket } from "react-icons/go";
import img from "../assets/Section3 img.png";
import BlurEffect from "../components/BlurEffect";
import { IoMdCheckboxOutline } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";
import { IoBarChartOutline } from "react-icons/io5";
import { SiOpenaccess } from "react-icons/si";
import { IoStarOutline } from "react-icons/io5";
const Section3 = () => {
  return (
    <main className="my-20 relative md:px-10 lg:px-14 px-5">
      <div className="flex justify-center flex-col md:flex-row items-center w-full">
        <div className="flex justify-start w-full text- md:items-center lg:items-start lg:text-start items-start flex-col">
          <AnimatedText
            text=" Unlock Exclusive Benefits & Be Part of the Deep Roots Revolution"
            animation="fade"
            as="h1"
            className="font-extrabold text-2xl text-center lg:text-start lg:text-3xl   my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#AD1AAF] dark:via-[#0085a8] to-neutral-500 bg-clip-text font-orbitron text-transparent"
          />
          <div className="w-full lg:hidden my-10">
            <img src={img} alt="" className="" />
          </div>
          <div className="flex justify-center  mt-6 items-center">
            <AnimateItem
              direction="top"
              delay={0.1}
              className="lg:direction-left  md:direction-right sm:direction-bottom">
              <GoRocket className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
            </AnimateItem>
            <AnimatedText
              text=" Start Earning Today!"
              animation="fade"
              as="h4"
              className="font-sans ml-3 text-lg"
            />
          </div>
          <p className=" font-sans mt-5 lg:w-[500px] md:w-[70vw]">
            Activate your wallet now by staking 1 DRC and earn 12% annual
            rewards. Start building your passive income today with Deep Roots.
          </p>
          <button className="mt-6 lg:mt-10  md:w-[70vw] px-6 font-orbitron py-3 bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-center relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#0085a8] transition-all hover:delay-1000  hover:ease-in-out text-white rounded-2xl w-[80vw] lg:max-w-[30vw] text-lg md:text-3xl md:my-6 tracking-wider ">
            Learn More...
          </button>
        </div>
        <div className="w-full hidden lg:flex">
          <img src={img} alt="" className="" />
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
                <IoStarOutline className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Referral Rewards."
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Share your wallet link with friends and split the rewards! your
              referral link stays active for anyone who joins and activates
              their wallet. Earn rewards continuosly as your network grows-until
              the limited token run out.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoMdCheckboxOutline className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Be an Early Bird!"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Join the Foundation as an early supporter and earn loyalty rewards
              from every project built on the Deep Roots Blockchain. Limited
              spots available, so act fast!
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <SiOpenaccess className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Exclusive Access"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Get early access to new features, private events, and token
              launches. Limited minting opportunities in the first year-SUPPLY
              IS LIMITED
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoBarChartOutline className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Manage Your Assets Efficiently"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Set up your personal dashboard to easily track assets, monitor
              earnings, and view rewards.Earn a percentage of every token
              launched on the Deep Roots blockchain.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <GiBullseye className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="Don't Miss Out!"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
                          Total supply of Deep Roots Coin: 26.2 million, distributed over 25 years.
                          Secure your place now to maximize your rewards.
                          Limited seats & limited supply-JOIN BEFORE IT'S TOO LATE.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <GiTrophyCup className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="RootOpia World Race Referral DashBoard."
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Complete in the world's biggest referral race & win from the million Pool!.
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

export default Section3;
