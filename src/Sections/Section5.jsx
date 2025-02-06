import AnimatedText from "../components/AnimationText";
import { ChevronRight } from "lucide-react";
import img from "../assets/asset5.jpeg"
import AnimateItem from "../components/AnimationItem";
const Section5 = () => {
  return (
    <main className="my-10  p-6 md:p-10">
      <div className=" flex justify-center items-center">
        <div className="flex justify-start  items-center w-full lg:mr-16 md:items-start flex-col">
          <AnimatedText
            text=" Transforming Real-World Assets into digital Value."
            animation="fade"
            as="h1"
            className="font-extrabold lg:max-w-[600px] text-2xl leading-[40px]  lg:text-start lg:text-3xl   my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#0085a8] dark:via-[#0085a8] to-neutral-500 bg-clip-text font-orbitron text-transparent"
          />
          <AnimateItem direction="right" delay={0.2}>
            <div className="w-full  lg:hidden flex my-5 ">
              <img src={img} alt="" className="rounded-2xl" />
            </div>
          </AnimateItem>
          <p className=" font-sans lg:w-[500px] md:w-[70vw]  my-5  md:text-start ">
            Blockchain enhances industries by enabling asset tokenization,
            decentralized finance, secure real estate transactions, supply chain
            transparency, and digital identity verification, ensuring security
            and efficiency. Supply chain transparency ensures authenticity and
            trust in logistics. Digital identity and certification provide
            secure, verifiable records.
          </p>
          <button className="py-3 font-sans text-lg px-5 border-2 border-[#0085a8] flex justify-center items-center">
            Explore <ChevronRight className="ml-3" />
          </button>
        </div>
        <AnimateItem direction="right" delay={0.2}>
          <div className="w-full  lg:flex hidden ">
            <img src={img} alt="" className="rounded-2xl" />
          </div>
        </AnimateItem>
      </div>
    </main>
  );
};

export default Section5;
