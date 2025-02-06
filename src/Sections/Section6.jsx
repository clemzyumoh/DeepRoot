import React from 'react'
import PuzzleBox from '../components/Puzzle'
import AnimatedText from '../components/AnimationText';

const Section6 = () => {
  return (
    <div className='flex justify-center items-center flex-col my-20'>
      <AnimatedText
        text=" What We Offer."
        animation="fade"
        as="h1"
        className="font-extrabold lg:max-w-[600px] text-2xl mb-14 leading-[40px]  lg:text-start lg:text-3xl   my-5 lg:leading-normal  bg-gradient-to-r from-[#0085a8] dark:via-[#0085a8] to-neutral-500 bg-clip-text font-orbitron text-transparent"
      />
      <PuzzleBox />
    </div>
  );
}

export default Section6